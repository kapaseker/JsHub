function print() {
    var args = Array.from(arguments);
    console.log(args.join(","));
}

function printGapLine(tag) {
    console.log("-----------------" + tag + "-----------------------")
}
print("learn create object");
printGapLine("{} decleration");
var Person = {
    name: "job",
    age: 90,
    weight: 56,
    sayHello: function () {
        console.log("I am " + this.name);
    }
}

console.log(Person);
console.log(Person.age);
Person.sayHello();
printGapLine("factory function");
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
printGapLine("constructor");
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

printGapLine("Object");

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

print(facebook.brand + "--->" + facebook.value);

printGapLine("create in object");
var xiaoMing = Object.create(boboy);
xiaoMing.name = "Ming.Xiao";
xiaoMing.sayHello();
