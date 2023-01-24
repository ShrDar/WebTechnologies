/*const person= new Object();
person.firstname= "Jack";
person.lastname= "Von";
person.age= 19;
document.getElementById("demo").innerHTML=person.firstname+person.lastname+person.age;
function employee(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}
e= new employee(101,"Dar",9000000);*//*Inline element- element which lets another element to stay besides it
Block element- element which doesn't let another element to stay besides it*/
function validation(){
    var username=document.getElementById("uname").value;
    var password=document.getElementById("pass").value;
    if(username==""){
        alert("Username not entered");
        return false;
    }
    else if(password==""){
    alert("Password not entered");
    return false;
    }
    else if(password.length<5){
        alert("Passsword too short!!")
        return false;
    }
    else{
        alert("Log in Successful")
    }
}

