import Fuse from 'fuse.js'
import { getDatabase, ref, child, get } from "firebase/database";
import { app } from './LoginScript';

/*
This script handles all matters relating to the search function.
*/

export function search(searchTerm) {
    /*
    Need to retrieve from either job listing db or employee db according to keywords
    Must be able to filter using predefined conditions (e.g. location, salary range, job type)
    Be able to do both at the same time
    */
        
}