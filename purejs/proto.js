function People(name, bio) {
    this.name = name;
    this.age = 34;
    this.gender = bio;
    this.sayHello = function () {
        console.log("Hello , i am " + this.name + ", i have " + this.age + " years old");
    };
}

var imp = new People("imp-VN", "male");
console.log(Object.getPrototypeOf(imp) === People.prototype);//原型链表示是一样的

People.prototype.suck = "dick";
console.log(imp.suck);

var xpg = new imp.constructor("xpg", "female");//同样可是使用一个对象的constructor去创建对象
console.log(xpg.suck);
xpg.sayHello();
console.log("constructor's name:" + xpg.constructor.name);

People.prototype.fireWell = function () {
    console.log("my gender is " + this.gender);
}

xpg.fireWell();