const Util = require("../privatelib/pureutil");

var b = 45;
Util.print(b);

function returnName() {
    return this.name;
}

function sayHello(voice) {
    Util.print(this.name + " love " + voice);
}

var apple = {
    name: "ApplePie",
};

var google = {
    name: "AndroidPie",
}

Util.print(returnName.call(apple));
Util.print(returnName.call(google));

sayHello.call(apple, "dick");
sayHello.call(google, "dart");

Util.printGapLine("bind function");

var appleHello = sayHello.bind(apple);//这个可以绑定很多次，nodejs中
appleHello("QQtang");
var googleHello = sayHello.bind(google);//绑定一个函数的调用对象
// var wrong = appleHello.bind(google); 注意，这个是不起作用的！！！！
googleHello("Sugar");

Util.printGapLine("this in object");

var guava = {
    left: 9,
    right: 23,
    get averange() {
        return (this.left + this.right) / 2;
    }
};

var guavaSon = Object.create(guava);
guavaSon.sum = function () { return this.left + this.right; };

Util.print(guava.averange);
Util.print(guavaSon.sum());