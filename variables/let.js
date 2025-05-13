//LET KEYWORD 

let a = 30;
// let a = 80; // Redeclear / Redefine not possible 
// manipulate possible
a=6000;
console.log(a);

//BLOCKED SCOPE 

{
    let o=80;
    console.log(o);
}

//Function Scoped Checked 
function check(){
    let m=7000; // we can access this m in function
    m="Rupayan";
    console.log(m);
}
check();
console.log(m);