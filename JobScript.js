/*
This handles the posting of new job offers, and the processes of applying to them.

DB Schema
Job Listing:
Listing ID - Auto-assigned PK
Company ID - FK
Job Title - String Required
Description - String Required
Education Level - int Required
Skills - String Required
Experience - String Required
Work Mode - int Required
Location - String Required
Date Posted - Date Auto-assigned

Job Application:
Application ID - Auto-assigned PK
Listing ID - FK
Employee ID - FK
Date Applied - Auto-assigned
Resolved - Boolean Default: False

Application Response:
Application ID - PK FK (Only one response per application)
Status - Boolean Required (True for approved, false for denied)
Message - String Optional
*/

function postJob(jobTitle, company, description, educationLevel, reqSkills, experience, workMode, location) {
    // Saves the listing to a database
    const sqlite = require('node:sqlite');
    const database = new sqlite.DatabaseSync('\database');
    database.exec('CREATE TABLE IF NOT EXISTS listings(id INT PRIMARY KEY, cid INT, title STRING, description STRING, education INT, skills STRING, experience STRING, mode INT, location STRING, date DEFAULT, listed BOOLEAN DEFAULT TRUE)');

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