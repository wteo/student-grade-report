const amy = [9.9, 10.0, 7.7, 6.8, 7.1];
const tom = [6.0, 5.0, 8.6, 7.5, 6.9];
const george = [4.5, 5.5, 5.3, 6.1, 4.8];
const alice = [10.0, 7.7, 4.9, 7.3, 6.3];


function getScores(student) {
    const score = student;
    const highest = Math.max(...score);
    const lowest = Math.min(...score);
    const total = score.reduce((total,currentVal) => (total + currentVal));
    const median = total / score.length;
    const grades = {
        highest, // max : highest shorten to highest
        lowest, // min : lowest shorten to lowest
        total, // sum: total shorten to total
        median // median: median shorten to median
    }
    return grades;
}


function pass(student) {
    if (student.every(grades => (grades >= 5))) {
        console.log("Congratulations! You have passed!");
    } else {
        console.log("Sorry! You must retake your exams.");
    }
    }


function summary(student) {
    console.log("You must score at least 5 in every subject to pass.")
    console.log("Your final report:");
    console.log(getScores(student));
    console.log(pass(student));
}