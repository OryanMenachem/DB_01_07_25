import readline from 'readline-sync';




function createStudentObject() {

    const studentObj = {
        "id": null, 
        "name": inputStudentName(), 
        "school": inputiStudentSchool()
    };
    
    return studentObj
}



function inputStudentName(){

 let studentName;

 while(true) {

    console.log(`Please enter the student name:`);
    studentName = readline.question(`> `)

    if (studentName) {return studentName}
    
    console.log(`Student name not entered!`);
    
    }
};


function inputiStudentSchool(){
     
    let schoolName;

    while(true) {

        console.log(`Please enter the school name:`);
        schoolName = readline.question(`> `)

        if (schoolName) {return schoolName}
        console.log(`School name not entered!`);
        
        }
};





// function addStudent(studentObj) {

// const DBpath = 'C:/Users/om316/OneDrive/Desktop/JavaScript/DB_01_07_25/schoolCRUD/DB/DB.txt';

// fs.readFile(DBpath, 'utf-8', (err, data) => {

//   if (err) {console.error(err); return;}

//   const jsonArray = JSON.parse(data); 
   
//   studentObj.id = jsonArray.length

//   jsonArray.push(studentObj);


// fs.writeFile(DBpath, JSON.stringify(jsonArray, null, 2), 'utf-8', (err) => {
    
//     if (err) { console.error(err); return; }

//     console.log('student added successfully!');

//   });
// });
// }


export default function addStudentManager() {

    const studentObj = createStudentObject();

    addStudent(studentObj);
}