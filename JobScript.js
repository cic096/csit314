import { getDatabase } from '@firebase/database';
import { app } from './LoginScript';

function postJob(jobTitle, company, description, educationLevel, reqSkills, experience, workMode, location) {
    // Saves the listing to a database
    const db = getDatabase(app);
    set(ref(database, 'listings/'))

    // get the id from the logged in employer then insert into database
}

function jobApplication(userId, listingId) {
    // Creates record in a database, and sends a notification to the prospective employer
    const sqlite = require('node:sqlite');
    const database = new sqlite.DatabaseSync('\database');
    database.exec('CREATE TABLE IF NOT EXISTS applications(id INT PRIMARY KEY, lid INT, eid INT, date DEFAULT, resolved DEFAULT FALSE');
}

function applicationResponse() {
    // Sent in response to an application, either approving or denying.
    const sqlite = require('node:sqlite');
    const database = new sqlite.DatabaseSync('\database');
    database.exec('CREATE TABLE IF NOT EXISTS responses(aid INT PRIMARY KEY, status BOOLEAN, message STRING)');

}

function delistJob(listingId) {
    // Use this to set a value in the database to true, hiding the job from both recommendation and searches.
    const sqlite = require('node:sqlite');
    const database = new sqlite.DatabaseSync('\database');
    database.exec('UPDATE listings SET listed = FALSE WHERE id = ' + listingId);
}