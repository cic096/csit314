import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBuRQN2whuQbnNiX8odNjYZW3DvtseYGZk",
  authDomain: "jobsearch-8f1c9.firebaseapp.com",
  projectId: "jobsearch-8f1c9",
  storageBucket: "jobsearch-8f1c9.firebasestorage.app",
  messagingSenderId: "145967063981",
  appId: "1:145967063981:web:716e4fa539b63d6e167724",
  databaseURL: "https://jobsearch-8f1c9-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);

export function employeeSignUp (email, pw, fName, lName, pName, edu, major, exp) {
    // Basically just check if the email is already used in the database, if not, then add a new entry, else show a message under the email input box that the email is already in use
    const database = getDatabase(app);
    const conflicts = get(child(database, 'employees/${email}')).exists();
    if (conflicts == false) {
        set(ref(database, 'employees/' + email), {
            password: pw,
            lFirstName: fName,
            lLastName: lName,
            prefName: pName,
            education: edu,
            field: major,
            experience: exp
        })
        return true;
    }
    else {
        return false;
    }
}

export function employerSignUp(email, bin, pw, companyName, industry) {
    // Add to a database, make sure that the bin is unique else same as above
    const database = getDatabase(app);
    database.exec('CREATE TABLE IF NOT EXISTS employers (id INT PRIMARY KEY, bin INT UNIQUE, name STRING, industry STRING, email STRING, password STRING)');
    const conflicts = get(child(database, 'employers/${email}')).exists();
    if (conflicts == false) {
        set(ref(database, 'employers/' + bin), {
            name: companyName,
            password: pw,
            ind: industry,
            em: email
        })
        database.exec('INSERT INTO employers(id, bin, name, industry, email, password) VALUES (' + bin + ', ' + companyName + ', ' + industry + ', ' +  email + ', ' + password + ')');
    }
    else {
        // display error
    }
}

let canSign = true;
    const error = document.getElementById("signupError");
    const eduSpinner = document.getElementById("education");
    const major = document.getElementById("majorGroup");
    eduSpinner.addEventListener("change", (event) => {
        if (event.target.value == "2" || event.target.value == "3" || event.target.value == "4") {
            major.classList.remove('hidden');
            major.setAttribute('required');
        }
        else {
            major.classList.add('hidden');
            major.removeAttribute('required')
        }
    });

    const employeeButton = document.getElementById("candidate");
    const employeeGroup = document.getElementById("candidateFields");
    const employerButton = document.getElementById("employer");
    const employerGroup = document.getElementById("employerFields");
    employerButton.addEventListener("click", () => {
        employeeGroup.classList.add('hidden');
        employeeButton.classList.remove('active');
        employerGroup.classList.remove('hidden');
        employerButton.classList.add('active');
        error.innerText = "";
        error.classList.add('hidden');
    });

    employeeButton.addEventListener("click", () => {
        employerGroup.classList.add('hidden');
        employerButton.classList.remove('active');
        employeeGroup.classList.remove('hidden');
        employeeButton.classList.add('active');
        error.innerText = "";
        error.classList.add('hidden');
    });

    const candPassword = document.getElementById("candPassword");
    const candConfirm = document.getElementById("candConfirm");
    candConfirm.addEventListener("input", () => {
        if (candPassword.value != candConfirm.value) {
            error.classList.remove('hidden')
            error.innerText = "Passwords do not match.";
            canSign = false;
        }
        else {
            error.innerText = "";
            error.classList.add('hidden');
            canSign = true;
        }
    });

    const empPassword = document.getElementById("empPassword");
    const empConfirm = document.getElementById("empConfirm");
    empConfirm.addEventListener("input", () => {
        if (empPassword.value != empConfirm.value) {
            error.innerText = "Passwords do not match.";
            error.classList.remove('hidden');
            canSign = false;
        }
        else {
            error.innerText = "";
            error.classList.add('hidden');
            canSign = true;
        }
    });
    
    function submitOnClick() {
        var succeed;
        if (canSign) {
            if (employeeButton.classList.contains('active')) {
                var succeed = employeeSignUp(document.getElementById('candEmail').value, candPassword.value, document.getElementById('firstName').value, document.getElementById('lastName').value, document.getElementById('preferredName').value,
                eduSpinner.value, major.value, document.getElementById("experience").value);
                if (succeed){
                    // proceed
                }
                else {
                    error.innerText = "Email already in use, please try to log in.";
                    error.classList.remove('hidden');
                }
            }
            else {
                var succeed = employerSignUp(document.getElementById('empEmail').value, document.getElementById('bin').value, empPassword.value, document.getElementById('companyName').value, document.getElementById('industry').value);
                if (succeed){
                    // proceed
                }
                else {
                    error.innerText = "BIN already in use, please try to log in.";
                    error.classList.remove('hidden');
                }
            }
        }
    }

    const submit = document.getElementById('submit');
    submit.addEventListener("click", submitOnClick());