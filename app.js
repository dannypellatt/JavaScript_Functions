console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 0; i < count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printOdds(20);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(username, age) {
    let aboveSixteen = `Congrats ${username}, you can drive!`;
    let belowSixteen = `Sorry ${username}, but you need to wait until you're 16.`;
    if (age < 16) {
        console.log(belowSixteen);
    }
    else {
        console.log(aboveSixteen);
    }
}
checkAge("Danny", 30);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function quadrant(x, y) {
    if (x > 0) {
        if (y > 0) {
            console.log("quadrant 1");
        }
        else {
            console.log("quadrant 4");
        }
    }
    else {
        if (y > 0) {
            console.log("quadrant 2");
        }
        else {
            console.log("quadrant 3");
        }
    }
}

quadrant(-2, 4);

// Exercise 4 Section
console.log("EXERCISE 2:\n==========\n");

function triangle(side1, side2, side3) {

}