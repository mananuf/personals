let newArray = [];
console.log(newArray);

newArray.push('string');
// console.log(newArray);

newArray.push({'integer': 12});
// console.log(newArray);

newArray.push(function add(a, b) {return a + b});
addNumbers = newArray[2];
getInt = newArray[1];
// console.log(addNumbers(1,2));
// console.log(getInt.integer);

// looping through arrays
for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
}

// index is passed in the object to aceess the value
for (let index in newArray) {
    console.log(newArray[index]);
}

// item is the actual item itself
for (let item of newArray) {
    console.log(item);
}

// use the object(in this case array) to call the forEach.
// syntax: object.forEach(callback(item, index))
newArray.forEach((item, index) => {
    console.log(`${index} ---> ${item}`);
});

// .slice
let secondArray = ['money', 'music', 2, true, false];
// console.log(secondArray.slice(1,3));

// splice(begin, end, insertNewElement, insseertANother)
console.log(secondArray.splice(1,2,'play', 'sleep', 2,3,4,5));
console.log(secondArray);
for (let item of secondArray) {
    console.log(item);
}

// spread operator: denoted with three dots ...
//REST parameter is used to capture arbitrary number of arguments
let numbers = (...numbers) => {
    // ...numbers comes in as an object
    let sum = 0;
    for (let number of numbers) {
        sum += number; 
    }
    return sum;
}

let digits = [1,2,3,4,5,6,7]
console.log(numbers(...digits));


// FUNCTIONAL ARRAY METHODS
// map method: returns a modified version of the object

let mapping = digits.map((value) => {
    let newVal = value * 10;

    if (newVal > 50) {
        return `${newVal} is greater than 50`;
    }else{
        return `${newVal} is less than 50`;
    }
    // return value > 3;
    
})
console.log(mapping);

// filter() takes an object and returns a filtered(based on condition) object back
let filtering = digits.filter((value) => {
    return value < 3;
});
console.log(filtering);

let reducing = digits.reduce((prev, next, index, array) => {
    return array;
});
console.log(reducing);