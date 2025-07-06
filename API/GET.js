import getDbContents from "../schoolCRUD/modules/readAsync.js";

const path = "C:/Users/om316/OneDrive/Desktop/JavaScript/Project_01_07_25/schoolCRUD/DB/studentsDB.txt"


export default async function get(req, res) {

        const data = await getDbContents(path);

        res.writeHead(200, {'Content-Type': 'application/json'});
        
        res.end(JSON.stringify(data, null, 2)); 
    
    }