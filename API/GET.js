import getDbContents from "../schoolCRUD/modules/read.js";

const path = "C:/Users/om316/OneDrive/Desktop/JavaScript/Project_01_07_25/schoolCRUD/DB/studentsDB.txt"


export default async function get(req, res) {

    const data = await getDbContents(path);
    
    res.end(JSON.stringify(data, null, 2)); 

}
    
    