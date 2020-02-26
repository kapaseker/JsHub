const nthUglyNumber = function (n, primes) {

    var primesIndex = new Array(primes.length).fill(0);
    var primesBox = new Array(primes.length).fill(0);

    var ugly = [1];

    var i = 0;

    for (; i < n; ++i) {

        primes.forEach((element, index) => {
            primesBox[index] = element * ugly[primesIndex[index]];
        });


        var min = minNumber(primesBox);
        ugly.push(min);

        primesBox.forEach((element, index) => {
            if (element == min) {
                primesIndex[index] = primesIndex[index] + 1;
            }
        });
    }

    return ugly[i - 1];
}

const minNumber = function (nums) {
    var min = nums[0];
    nums.forEach(element => {
        if (element < min) {
            min = element;
        }
    });
    return min;
}

console.log(nthUglyNumber(6, [2,7,13,19]));