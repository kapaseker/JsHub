exports.print = function () {
    var args = Array.from(arguments);
    console.log(args.join(","));
};

exports.printGapLine = function(tag) {
    console.log("-----------------" + tag + "-----------------------")
}
