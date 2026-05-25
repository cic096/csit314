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

// Include number of positions of available?
function postJob(jobTitle, company, description, educationLevel, reqSkills, experience, workMode, location) {
    // Saves the listing to a database
}

function jobApplication(userId, listingId) {
    // Creates record in a database, and sends a notification to the prospective employer
}

function applicationResponse() {
    // Sent in response to an application, either approving or denying.
}

function delistJob(listingId) {
    // Use this to set a value in the database to true, hiding the job from both recommendation and searches.
}