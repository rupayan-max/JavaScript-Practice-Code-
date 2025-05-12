//Global Scoped | I can use this variable anywhere in this file
var a= 20;


// Blocked Scope 
{
    var c=60;
    console.log(c);
}
console.log(c);
//I can use c variable in block scope and Out of Blcok Scope



//Function Scoped
function check() {
    var b=30;
    console.log(b);
}

check();
// I can not use this b variable except inside of function 
console.log(b);




// Var is function scoped , Global Scoped
// Var is not BlOCK Scoped 