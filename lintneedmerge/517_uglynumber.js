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

console.log(isUgly(8));
console.log(isUgly(9));
console.log(isUgly(24));
console.log(isUgly(17));
console.log(isUgly(0));
console.log(isUgly(223));