
const nthUglyNumber = function (n) {

    if (n <= 6) {
        return n;
    }

    var ugly = [1];
    var a = 0;
    var b = 0;
    var c = 0;
    var i = 0;

    for (; i < n; ++i) {

        var ifA = ugly[a] * 2;
        var ifB = ugly[b] * 3;
        var ifC = ugly[c] * 5;

        var min = Math.min(ifA, ifB, ifC);
        ugly.push(min);

        if (ifA == min) {
            ++a;
        }
        if (ifB == min) {
            ++b;
        }
        if (ifC == min) {
            ++c;
        }
    }

    return ugly[i - 1];

    // var currentArrayLength = uglyArray.length;

    // if (n <= currentArrayLength) {
    //     return uglyArray[n - 1];
    // }

    // var currentNumber = 13;

    // while (currentArrayLength != n) {
    //     currentNumber++;
    //     if (isUgly(currentNumber)) {
    //         currentArrayLength++;
    //     }
    // }

    // while (currentArrayLength != n) {
    //     currentNumber++;
    //     if ((currentNumber & 1) == 0) {
    //         var num = currentNumber >> 1;
    //         if (binSearch(uglyArray, num) > -1) {
    //             uglyArray.push(currentNumber);
    //             currentArrayLength++;
    //         }

    //     } else if ((currentNumber % 3) == 0) {
    //         var num = currentNumber / 3;
    //         if (binSearch(uglyArray, num) > -1) {
    //             uglyArray.push(currentNumber);
    //             currentArrayLength++;
    //         }
    //     } else if ((currentNumber % 5) == 0) {
    //         var num = currentNumber / 5;
    //         if (binSearch(uglyArray, num) > -1) {
    //             uglyArray.push(currentNumber);
    //             currentArrayLength++;
    //         }
    //     }
    // }

    // return currentNumber;
}


var uglyArray = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12];

const binSearch = function (nums, n) {
    var start = 0;
    var end = nums.length - 1;

    while (start < end) {
        var mid = parseInt((end + start) / 2);
        if (nums[mid] > n) {
            end = mid - 1;
        } else if (nums[mid] < n) {
            start = mid + 1
        } else {
            return mid;
        }
    }

    if (nums[start] == n) {
        return start;
    }

    return -1;
}

const isUgly = function (num) {

    if (num == 1) {
        return false;
    }

    if (num == 0) {
        return false;
    }

    while (num != 1) {
        if ((num & 1) == 0) {
            num = num >> 1;
            continue;
        } else if ((num % 3) == 0) {
            num = num / 3;
            continue;
        } else if ((num % 5) == 0) {
            num = num / 5;
            continue
        }
        break;
    }

    if (num == 1) {
        return true;
    }

    return false;
}

console.log(nthUglyNumber(16));
// console.log(binSearch(uglyArray, 9));