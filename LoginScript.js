/* 
TODO:
Login function
Sign up function

Must determine if a user is a prospective employer or employee. Prob just use a variable passed through depending on a drop down or something. Needs to log user in as well, thus requiring login to be split into two functions, one handling button press,
and the other handling the logic. Thus database stuff must also be separate as sign up will be read-write, while log-in will just be read.

Rules for accounts:
Email must be unique (for prospective employee)
Business Identification Number must be unique (for prospective employer)
Email must be valid (consider sending a verification email (only if you have time))
Phone number must be valid (i.e. a valid format)

Consider integrating API for ABN to verify that the given ID number is valid https://abr.business.gov.au/Tools/WebServices (only if you have time)

DB Schema
Prospective Employee:
Employee ID - Auto-assigned PK
Email Address - String Required Unique
Password - String Required
Legal first name - String Required
Legal last name - String Required
Preferred name - String Optional Default: null
Member status - Boolean Required Default: false
Level of Education - Either String or int (if int, e.g. 0 = Year 10 or earlier, 1 = Year 12, 2 = Bachelors, 3 = Masters, 4 = PHD) Required
Major/Field of Study - String Required if education level is bachelors or higher
Years of Experience - Int Required

Prospective Employer:
Employer ID - Auto-assigned PK
Business Identification Number - String Required Unique
Company Name: String Required
Industry: String Required
Email - String Required
Password - String Required
*/

// Might be best just to pull from the elements directly, not to pass into the function. Same for the other one
function employeeSignUp (email, password, lFirstName, lLastName, pName, education, major, experience) {
    // Basically just check if the email is already used in the database, if not, then add a new entry, else show a message under the email input box that the email is already in use
    

    login(email, password)
}

function employerSignUp(email, bin, password, companyName, industry) {
    // Add to a database, make sure that the bin is unique else same as above

    login(email, password)
}

function login (email, password) {
    // Checks against the database, shows an error if email is not present, or password does not match. If it all checks out, then proceed to the next part of the flow
}