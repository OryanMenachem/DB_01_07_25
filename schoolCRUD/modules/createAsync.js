import * as fsp from 'node:fs/promises';
import dbContents from './readAsync.js'





export default async function addingObjToTheDB(dbPath, obj) 
{
    let dbContentArray = await dbContents(dbPath);

    obj = JSON.parse(obj)
 
    dbContentArray.push(obj);

    await writeToDB(dbPath , dbContentArray );
    
    }
 
    
    


    
    

       


async function writeToDB(dbPath, content) {

       try {

        await fsp.writeFile(dbPath, JSON.stringify(content, null, 2))

        console.log('\nThe object was added successfully.\n')
    } 

    catch(error) {console.log(error.message)}


}



