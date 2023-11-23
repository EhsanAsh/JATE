// Desc: This file is the service worker file.
// It is responsible for caching all the static assets
// and serving them from the cache when the user is offline.
// =======================================================

// Importing workbox recipes
// =======================================================
const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { StaleWhileRevalidate, CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');
// =======================================================

// Precaching static assets
// =======================================================
precacheAndRoute(self.__WB_MANIFEST);
// =======================================================

// in this section we are dealing with fetching dynamic files.
// =======================================================

// define the cache version to be used
// =======================================================
const cacheVersion = 'v1';
// =======================================================

// creating a page cache strategy to cache
// all the pages that are navigated to.
// =======================================================
const pageCacheName = `page-cache-${cacheVersion}`;
const pageCache = new CacheFirst({
    cacheName: pageCacheName,
    plugins: [
        new CacheableResponsePlugin({
            statuses: [0, 200],
        }),
        new ExpirationPlugin({
            maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
    ],
});

// using warm strategy cache to load determined
// urls into cache on service worker install
warmStrategyCache({
    urls: ['/index.html', '/'],
    strategy: pageCache,
});

registerRoute(
    ({ request }) => request.mode === 'navigate',
    async ({ event }) => {
        try {
            return await pageCache.handle({ request: event.request, event });
        } catch (error) {
            console.error('Error while fetching page', error);
            return caches.match('/offline.html');
        }
    }
);
// =======================================================

// Caching static assets
// =======================================================
const staticAssetCacheName = `static-assets-${cacheVersion}`;
const staticAssetCache = new StaleWhileRevalidate({
    cacheName: staticAssetCacheName,
    plugins: [
        new CacheableResponsePlugin({
            statuses: [0, 200],
        }),
    ],
});

const staticMatch = ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker';


registerRoute(
    staticMatch,
    async ({ event }) => {
        try {
            return await staticAssetCache.handle({ request: event.request, event});
        } catch (error) {
            console.error('Error while fetching static assets', error);
            return caches.match('/offline.html');
        }
    }
);
// =======================================================

// Caching images
// =======================================================
const imageCacheName = `images-${cacheVersion}`;
const imageCache = new CacheFirst({
    cacheName: imageCacheName,
    plugins: [
        new CacheableResponsePlugin({
            statuses: [0, 200],
        }),
        new ExpirationPlugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
    ],
});

const imageMatch = ({ request }) => request.destination === 'image';

registerRoute(
    imageMatch,
    async ({ event }) => {
        try {
            return await imageCache.handle({ request: event.request, event });
        } catch (error) {
            console.error('Error while fetching images', error);
            return caches.match('/offline.html');
        }
    }
);
// =======================================================

// offline fallback
// =======================================================
offlineFallback();
// =======================================================

// Cleaning up old caches
// =======================================================
self.addEventListener('activate', (event) => {
    const currentCaches = [pageCacheName, staticAssetCacheName, imageCacheName];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
        }).then((cachesToDelete) => {
            return Promise.all(cachesToDelete.map((cacheToDelete) => {
                return caches.delete(cacheToDelete);
            }));
        }).then(() => self.clients.claim())
    );
});
// =======================================================

