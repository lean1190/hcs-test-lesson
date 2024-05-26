// The for loop way
function sumWithForLoop(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    return result;
}

// Teaser of another immutable array operator, reduce
function sumWithReduce(...numbers) {
    return numbers.reduce((result, n) => result + n, 0);
}

console.log('Result', sumWithForLoop(1, 2, 3, 4, 5), sumWithReduce(1, 2, 3, 4, 5));