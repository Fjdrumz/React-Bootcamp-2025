function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 4));

const student = {
    name: "John Doe",
    age: 21,
    getInfo: function() {
        console.log(`Student's Name: ${this.name}, Age: ${this.age}`);
    }
};

student.getInfo(); 

const multiply = (a, b) => a * b;

console.log(multiply(5, 6)); 

const divide = function(a, b) {
    return a / b;
};

console.log(divide(10, 2));


function processNumber(number, callback) {
    return callback(number);
}

const double = (num) => num * 2;
const triple = (num) => num * 3;

console.log(processNumber(5, double)); 
console.log(processNumber(5, triple)); 


function runTask(taskName, callback) {
    callback(taskName);
}

const logTask = (task) => {
    console.log(`Running task: ${task}`);
};

runTask("Clean the room", logTask); 