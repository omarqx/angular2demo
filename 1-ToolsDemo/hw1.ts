interface Printable {
    text: string;
}

function greeter(msg: Printable) {
    return "Hello " + msg.text;
}

var message = { text:"world"};

console.log(greeter(message));