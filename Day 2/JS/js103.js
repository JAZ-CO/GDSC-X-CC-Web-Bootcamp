function add(x,y){
    return x+ y
}
let substract = function(x,y){
    return Math.abs(x-y)
}

let multiply = (x,y) => x*y;

let input = "add"
let x = 2;
let y = 2;


let z =
input === "add"? console.log(add(x,y))
:
    input ==="mult"?
        console.log(multiply(x,y)): console.log(substract(x,y))

//// task2

class Student{
    name
    major
    #id
    constructor(name,major,id){
        this.name = name;
        this.major = major;
        this.#id = id;
    }
    static older(id){
        if(id > this.id){
            console.log("This student is older")
        }
        else{
            console.log("This student is younger")
        }
    }
    getId(){
        return this.#id
    }
}


