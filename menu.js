import readline from 'readline-sync';



function showMenu() {
    
    console.log('Choose one of the following options: \n');
    
    console.log('------------ MENU ------------');
    console.log('1. CREATE - Add a new student.');
    console.log('2. READ - Show all students.  ');
    console.log('3. UPDATE - Update student.   ');
    console.log('4. DELETE - Remove a student. ')
    console.log('------------------------------');
    

    
}

function inputChoice() {

    let choice = readline.question('> ');
    return choice;
}


function choiceHandling(choice) {

    switch (choice) {
        case 1:
            return;
        case 2:
            return;
        case 3:
            return;
        case 4:
            return;
        default:
            console.log('Option does not exist!');
            return false;
        }
    }
            
            
export default function MenuManager() {

    let rightChoice = true;

    do {

        showMenu();
        let choice = inputChoice();
        rightChoice = choiceHandling(choice);
    
    } while (!rightChoice)
}
