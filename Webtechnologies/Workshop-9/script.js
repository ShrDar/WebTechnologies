//console.log('Hello world');
/*let a=8;
console.log(typeof(a))
let b=10;
let sum=a+b;
console.log("Sum is :",sum);*/
/* a=8;
var b=2;
var mul=a*b;
console.log("Multiplication : "+mul);*/
/*const PI=3.14;
let r=window.prompt("Enter Radius: ");
circum=2*PI*r;
area=PI*(r**2);
console.log("Circumference: "+circum);
console.log("Area: "+area);*/
/*function dog(){
let age=window.prompt("Enter Age:");
if(age>=10){
    old(age);
}
else{
    young();
}
}
function old(age){
    console.log("The DOG is Very Old");
    console.log(age);
}
function young(){
    console.log("The DOG is Very Young")
}
dog();*/
document.getElementById("mybot").onclick=function(){
    const PI=3.14;
    let radius=document.getElementById("myno").value;
    let circum=2*PI*radius;
    console.log("The Radius is: "+radius);
    console.log("The circumference is: "+circum);
    /*document.getElementById("circum").innerHTML=circum;*/
    document.getElementById("circum").append(circum);
    alert("Hey");
}

