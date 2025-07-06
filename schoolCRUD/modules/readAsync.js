import * as fsp from 'node:fs/promises'



export default async function getDbContents(DBpath) {
    
    try {

       let dbContents = await fsp.readFile(DBpath, 'utf-8');
      
       dbContents = JSON.parse(dbContents)

       return dbContents;
    }

    catch (error) { return error.message }
}





