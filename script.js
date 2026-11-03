//local storage;

function display(){
let name=document.getElementById("name").value;
let date=document.getElementById("date").value;
let age=document.getElementById("age").value;
let contact=document.getElementById("contact").value;
let email=document.getElementById("email").value;

localStorage.setItem("name",name);
localStorage.setItem("date",date);
localStorage.setItem("age",age);
localStorage.setItem("contact",contact);
localStorage.setItem("email",email);


setCookie("name" ,name,365)
setCookie("date",date,365)
setCookie("age",age,365)

setTimeout(()=>{
window.location.href="expense.html"

},3000);

}
function setCookie(name,value,daysToLive){
const date =new Date();
date.setTime(date.getTime()+(daysToLive *24*60*60*1000));

let expires="expires="+date.toUTCString();
document.cookie=`${name}=${encodeURIComponent(value)};${expires};path=/`

}

//end of cookie



