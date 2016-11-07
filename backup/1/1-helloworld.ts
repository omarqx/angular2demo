interface Person {
    name: string;
}

function greeter(person: Person) {
    return "Hello, " + person.name;
}

var user = { name:"Omar"};

console.log(greeter(user));