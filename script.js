// -1

function sum(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0)
            sum += numbers[i]
    }
    console.log(sum);
}

sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8)


// -2

function sumOne(...numbersOne) {
    let sumOne = 0;
    for (let b = 0; b < numbersOne.length; b++) {
        sumOne += numbersOne[b]
    }
    console.log(sumOne);
}

sumOne(10, 50, 6, 7, 88, 11, 6, 3, 9)


// -3
let user = {
    firstname: "giorgi",
    lastname: "saakadze",
    age: 32,
    isloggedin: true,
};

function userInfo(obj) {
    if (obj.isloggedin) {
        return obj.firstname + " " + obj.lastname;
        // return `${obj.firstname} ${obj.lastname}`;
    }
    return false;
}

let resultOne = userInfo(user);
console.log(resultOne);


// -4 

function getMaxValue(...numbers) {
    let maxValue = 0;
    for (let item of numbers) {
        if (item > maxValue) {
            maxValue = item;
        }
    }
    return maxValue;
}

let resultMax = getMaxValue(100, 4, 25, 250, 13);
console.log(resultMax);


// -5 

function evenOddCheck(someNumber) {
    if (someNumber % 2 == 0) {
        return 'This number is even.'
    }
    else if (someNumber % 2 == 1) {
        return 'This number is odd.'
    } return 'error!'
}

let result = evenOddCheck(10)
let resultTwo = evenOddCheck(15)
let resultThree = evenOddCheck(-5)
console.log(result);
console.log(resultTwo);
console.log(resultThree);

// -6 

let arraySix = [1, 2, 3, 4, 5];

for (let i = arraySix.length - 1; i >= 0; arraySix--);
console.log(arraySix[i]);


// -7 


// function ageCheck(ageNumber) {
//     if (ageNumber > 18) {
//         return 'სრულწლოვანი'
//     } else return 'არასრულწლოვანი'
// }

// let checkResult = ageCheck(15)
// console.log(checkResult);

let ageCheck = (ageNumber) => {
    return ageNumber > 18 ? 'სრულწლოვანი' : 'არასრულწლოვანი';
}
console.log(ageCheck(40));