const readline = require ('readline-sync');
//function that grades the marks
const gradeGenerator = ( marks ) => {

    //checks is userInput is greater than 0, less than 100, is a number and is not empty
    if( marks < 0 || marks > 100 || !marks || typeof(marks) !== "number" ) {
        return console.log('Please pick a number between 0 and 100');
    } else {
        let grade; //initialize the grade variable

        //this is where grades are assigned
        if ( marks > 79 ) {
            grade = 'A';
        } else if ( marks >= 60 && marks <= 79 ) {
            grade = 'B';
        } else if ( marks >= 50 && marks <= 59 ) {
            grade = 'C';
        } else if ( marks >= 40 && marks <= 49 ) {
            grade = 'D';
        } else {
            grade = 'E';
        };

        return `Grade: ${grade}`;
    }
};

const marks = parseFloat(readline.question('Enter your marks:'));
console.log(gradeGenerator(marks));  
 