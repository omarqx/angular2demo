import * as _ from "lodash"

interface Person {
    firstName: string;
    lastName: string;
}

class Greeter{
    public text:string = "";
    constructor(person: Person){
    this.text= `Hello, ${person.firstName} ${person.lastName}`;
    }
    print(){
        console.log(this.text);
    }
}

var user:Person = { firstName:"Omar",lastName:"Qaddoumi"};
var print = x=>x.print();
let greet = new Greeter(user);
print(greet);