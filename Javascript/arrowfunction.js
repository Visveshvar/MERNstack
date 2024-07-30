//arrow function with no return type and no arguments
var a=()=>{
    console.log("Hello World!");
}
a();

//arrow function with no return type and having arguments

var b=(n1,n2)=>{
    console.log(n1+n2);
}
b(43,22);

//arrow function with return type and no arguments
var c=()=>{
    return 5*4;
}
console.log(c());

//arrow function with return type and with arguments
var d=(n1,n2)=>{
    return n1-n2;
}
console.log(d(33,22));