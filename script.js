//local storage;

function display(){
let name=document.getElementById("name").value;
let date=document.getElementById("date").value;
let age=document.getElementById("age").value;
let contact=document.getElementById("contact").value;

localStorage.setItem("name",name);
localStorage.setItem("date",date);
localStorage.setItem("age",age);
localStorage.setItem("contact",contact);


}








