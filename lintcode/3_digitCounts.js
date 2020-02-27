const digitCounts = function (k, n) {
    // write your code here

    var count = 0;
    for (i = 0; i <= n; ++i) {
        x = i;
        while (x > 0) {
            var remain = x % 10;
            if (k == remain) {
                count++;
            }
            x = parseInt(x / 10);
        }
    }

    if (k == 0) {
        return count + 1;
    }

    return count;
}

console.log(digitCounts(0, 10));
console.log(digitCounts(1, 12));
