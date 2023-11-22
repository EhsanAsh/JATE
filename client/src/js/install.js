// Desc: JavaScript file for the install button
// =================================================

// Get the install button
// =================================================
const butInstall = document.getElementById('buttonInstall');
// =================================================

// Logic for installing the PWA
// =================================================

// an event handler to the `beforeinstallprompt` event
// =================================================
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome from automatically showing the prompt
    event.preventDefault();
    // Stash the event so it can be triggered later. the event object here is a BeforeInstallPromptEvent object which contains a prompt() method and a userChoice property that returns a Promise that resolves to a DOMString indicating what choice the user made.
    deferredPrompt = event;
    console.log('beforeinstallprompt fired');
    console.log(event);
    // Update UI to notify the user they can add to home screen
    butInstall.style.display = 'block';
});
// =================================================

// Implement a click event handler on the `butInstall` element
// =================================================
butInstall.addEventListener('click', async () => {

    // Show the install prompt
    deferredPrompt.prompt();
    console.log('butInstall-clicked');
    console.log(deferredPrompt.prompt());
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(outcome);
    if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
    } else {
        console.log('User dismissed the install prompt');
    }
    // We've used the prompt, and can't use it again, throw it away
    deferredPrompt = null;
    // Hide the app provided install promotion
    butInstall.style.display = 'none';

});
// =================================================

// Add an handler for the `appinstalled` event
// =================================================
window.addEventListener('appinstalled', (event) => {
    console.log('App was installed', event);
});
// =================================================
