import addingObjToTheDB from '../schoolCRUD/modules/createAsync.js'

const path = "C:/Users/om316/OneDrive/Desktop/JavaScript/Project_01_07_25/schoolCRUD/DB/studentsDB.txt"

export default  function post(req, res) {
    
    let body = "";

    req.on('data', chunk => {
        body += chunk.toString();
    })

     req.on('end', async ()=> {

     await addingObjToTheDB(path, body);

     res.end();

    })
}
      



  


