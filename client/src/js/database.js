// Desc: this file contains the database functions for the client
// ===============================================================

// import the openDB function from the idb package
// https://www.npmjs.com/package/idb
// ===============================================================
import { openDB } from 'idb';
// ===============================================================

// Adding a variable to control the database version
// ===============================================================
const DATABASE_VERSION = 1;
// ===============================================================

// Create a new method called initdb that will create the database
// ===============================================================
const initdb = async () =>{
    try {
        await openDB('jate', DATABASE_VERSION, {
            upgrade(db) {
                if (db.objectStoreNames.contains('jate')) {
                    console.log('jate database already exists');
                    return;
                }
                db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
                console.log('jate database created');
            },
        });
    } catch (error) {
        console.error('Error initializing database:', error);
    }
};
// ===============================================================

// Adding a new method to the database.js file that
// will save the content to the database
// ==========================================================
export const putDb = async (content) => {
    try {
        const db = await openDB('jate', DATABASE_VERSION);
        const tx = db.transaction('jate', 'readwrite');
        const store = tx.objectStore('jate');
        const request = store.add({ jate: content });
        const result = await request;
        console.log('Data saved to the database', result);
    } catch (error) {
        console.error('Error saving data to database:', error);
    }
};
// ===============================================================

// Adding a new method to the database.js file
// that will get the content from the database
// ===============================================================
export const getDb = async () => {
    try {
        const db = await openDB('jate', DATABASE_VERSION);
        const tx = db.transaction('jate', 'readonly');
        const store = tx.objectStore('jate');
        const request = store.getAll();
        const result = await request;
        console.log('Data retrieved from the database', result);
        return result.length > 0 ? result[result.length - 1].jate : null;
    } catch (error) {
        console.error('Error getting data from database:', error);
    }
};
// ===============================================================

// Calling the initdb method
// ===============================================================
initdb();
// ===============================================================
