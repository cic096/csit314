import Fuse from 'fuse.js'
import { getDatabase, ref, child, get } from "firebase/database";
import { app } from './LoginScript';

/*
This script handles all matters relating to the search function.
*/

export function employeeSearch(searchTerm) {
    /*
    Need to retrieve from either job listing db or employee db according to keywords
    Must be able to filter using predefined conditions (e.g. location, salary range, job type)
    Be able to do both at the same time
    */
    const db = getDatabase(app);
    get(child(ref(db), 'listings/'))
    // render flat as an array of objects then search their req skills and title too for the searchTerm
    // 11:38PM 5/06/26 I'm so sorry everyone. I can't do it. I've hit the wall. I can't go any further. The dream is dead.
}

export function employerSearch(searchTerm) {

}