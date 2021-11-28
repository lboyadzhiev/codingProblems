/*
    2. Grades
Write a function that receives a grade between 2.00 and 6.00 and prints the corresponding grade in words
    • 2.00 - 2.99 - "Fail"
    • 3.00 - 3.49 - "Poor"
    • 3.50 - 4.49 - "Good"
    • 4.50 - 5.49 - "Very good"
    • 5.50 - 6.00 - "Excellent"
*/

function grades(grade) {
    let output;
    if (grade >= 2.0 && grade < 3.0) {
        output = 'Fail';
    }

    if (grade >= 3.0 && grade < 3.5) {
        output = 'Poor';
    }

    if (grade >= 3.5 && grade < 4.5) {
        output = 'Good';
    }

    if (grade >= 4.5 && grade < 5.5) {
        output = 'Very good';
    }

    if (grade >= 5.5 && grade < 6.0) {
        output = 'Excellent';
    }

    console.log(output);
}

grades(3.33);
