"use strict";
var Greeter = (function () {
    function Greeter(person) {
        this.text = "";
        this.text = "Hello, " + person.firstName + " " + person.lastName;
    }
    Greeter.prototype.print = function () {
        console.log(this.text);
    };
    return Greeter;
}());
var user = { firstName: "Omar", lastName: "Qaddoumi" };
var print = function (x) { return x.print(); };
var greet = new Greeter(user);
print(greet);
