function largestPairSum(numbers) {
numbers.sort(function(a, b) {return b - a});
    a = numbers[0];
    b = numbers[1];
    c = a + b;
    return c;
}


console.log(largestPairSum([1, 2, 5, 3, 23, 11, 21]));
