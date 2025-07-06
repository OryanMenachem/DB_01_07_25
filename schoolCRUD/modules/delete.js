import readline from 'readline-sync';

function inputStudentId(){

 let studentId;

 while(true) {

    console.log(`Please enter the student id:`);
    studentId = readline.question(`> `)

    if (studentId) {return studentId}
    console.log(`Student id not entered!`);
    
    }
};



function deleteStudent(studentId) {

    

}

function deletionManager() {

    const studentId = inputStudentId();

    try { 

        deleteStudent(studentId);

        console.log(`The student has been deleted.`);
        
     }

    catch(error) {console.log(error)}

}