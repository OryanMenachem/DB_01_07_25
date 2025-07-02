import fs, { readFile } from 'fs';
import { json } from 'stream/consumers';




/***
 * This function reads a JSON file from the specified path,
 * parses its content to a JavaScript object,
 * then converts it back to a nicely formatted JSON string,
 * and finally logs it to the console.
 * 
 * If there's an error reading the file, it logs the error.
 ***/

export default function showFileContents() {
    
    const pathDb = 'C:/Users/om316/OneDrive/Desktop/JavaScript/DB_01_07_25/schoolCRUD/DB/DB.txt';

    readFile(pathDb, 'utf-8', (err, data) => {

        if(err) {console.error(err); return;}

        data = JSON.parse(data);

        data = JSON.stringify(data, null, 2);

        console.log(data);
        
             
    })
}



