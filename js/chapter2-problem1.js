// PROBLEM: HALF OF A SQUARE

// Write a program that uses only two output statements, cout << "#" and cout << "\n", to produce a pattern of hash symbols shaped like half of a perfect 5 x 5 square (or a right triangle):
// #####
// ####
// ###
// ##
// #

// Spraul, V. Anton. Think Like a Programmer (p. 26). No Starch Press. Kindle Edition.
// -----------------------------------------------------------------------------------

const chapter2HalfOfASquare = () => {
    console.clear();

    // PROBLEM: A LINE (HALF OF A SQUARE FURTHER REDUCTION)
    console.log('- First step:');
    let halfSquare = '';
    for (let i = 1; i <= 5; i++) {
        halfSquare += '#';
    }
    console.log(halfSquare);

    // PROBLEM: A SQUARE (HALF OF A SQUARE REDUCTION)
    console.log('- Second step:');
    let halfSquare2 = '';
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
            halfSquare2 += '#';
        }
        halfSquare2 += '\n';
    }
    console.log(halfSquare2);

    // PROBLEM: COUNT DOWN BY COUNTING UP
    console.log('- Third step:');
    console.log('Row\tDesired Value');
    for (let i = 1; i <= 5; i++) {
        console.log(i + '\t' + (6 - i));
    }

    // PROBLEM: HALF OF A SQUARE
    console.log('- Fourth step:');
    let halfSquare3 = '';
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 6 - i; j++) {
            halfSquare3 += '#';
        }
        halfSquare3 += '\n';
    }
    console.log(halfSquare3);
};
