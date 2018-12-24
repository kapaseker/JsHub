const Util = require("../privatelib/pureutil");

Util.print("learn create object");
Util.printGapLine("{} decleration");
var Person = {
    name: "job",
    age: 90,
    weight: 56,
    sayHello: function () {
        console.log("I am " + this.name);
    }
}

Util.print(Person);
Util.print(Person.age);
Person.sayHello();
Util.printGapLine("factory function");
function createObj() {
    var obj = {};
    obj.book = "Learn Perl";
    obj.printSomething = function () {
        console.log(this.book + " is very good for all people");
    }
    return obj;
}

var me = createObj();
me.printSomething();
Util.printGapLine("constructor");
function People(name, bio) {
    this.name = name;
    this.age = 34;
    this.gender = bio;
    this.sayHello = function () {
        console.log("Hello , i am " + this.name + ", i have " + this.age + " years old");
    };
}
var boboy = new People("boboy cash");
boboy.sayHello();

Util.printGapLine("Object");

var lumia = new Object();
lumia.name = "lumia";
lumia.something = "i love making love";
lumia.sayMe = function () {
    console.log("I am " + this.name + ", my hoby is " + this.something);
}

lumia.sayMe();

var facebook = new Object({
    from: "china",
    brand: "huawei",
    value: 2300,
});

Util.print(facebook.brand + "--->" + facebook.value);

Util.printGapLine("create in object");
var xiaoMing = Object.create(boboy);
xiaoMing.name = "Ming.Xiao";
xiaoMing.sayHello();
