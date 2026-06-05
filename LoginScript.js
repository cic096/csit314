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
    var conflicts = false;
    get(child(ref(database), 'employees/' + email)).then((snapshot) => {
        console.log(snapshot.exists());
        if (snapshot.exists()) {
            var conflicts = true;
        }
        else {
            var conflicts = false;
        }
    }).catch((error) => {
        console.log(error);
    });
    console.log(conflicts);
    if (conflicts == false) {
        if (major != null) {
            set(ref(database, 'employees/' + email), {
                password: pw,
                lFirstName: fName,
                lLastName: lName,
                prefName: pName,
                education: edu,
                field: major,
                experience: exp,
                member: false
            });
        }
        else {
            set(ref(database, 'employees/' + email), {
                password: pw,
                lFirstName: fName,
                lLastName: lName,
                prefName: pName,
                education: edu,
                field: '',
                experience: exp,
                member: false
            });
        }
        
        return true;
    }
    else {
        return false;
    }
}

export function employerSignUp(email, bin, pw, companyName, industry) {
    // Add to a database, make sure that the bin is unique else same as above
    const database = getDatabase(app);
    var conflicts = false;
    get(child(ref(database), 'employers/' + email)).then((snapshot) => {
        console.log(snapshot.exists());
    if (snapshot.exists()) {
            var conflicts = true;
        }
        else {
            var conflicts = false;
        }
    }).catch((error) => {
        console.log(error);
    });
    if (conflicts == false) {
        set(ref(database, 'employers/' + email), {
            name: companyName,
            password: pw,
            ind: industry,
            ident: bin
        });
        return true
    }
    else {
        return false
    }
}

export function login(email, password, type) {
        const database = getDatabase(app);
        if (type == 'candidate') {
            get(child(ref(database, 'employees' + email)).then((snapshot) => {
                console.log(snapshot.val());
                if (snapshot.exists()) {
                    if (snapshot.child('password').val() == password) {
                        return true;
                    }
                }
                else {
                    return false;
                }
            }));
        }
        else {
            get(child(ref(database, 'employers' + email)).then((snapshot) => {
                console.log(snapshot.val());
                if (snapshot.exists()) {
                    if (snapshot.child('password').val() == password) {
                        return true;
                    }
                }
                else {
                    return false;
                }
            }));
        }
    }