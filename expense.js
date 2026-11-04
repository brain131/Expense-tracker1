class ExpenseTracker{
constructor(id,description,amount,category){
this.id=id
this.amount=amount;
this.description=description
this.category=category

}

}
function addTask(){
const description=document.getElementById("description").value.trim();
const amount=document.getElementById("amount").value.trim();
const category=document.getElementById("category").value.trim();

const tasks=new ExpenseTracker(Date.now(),description,amount,category);
const task=JSON.parse(localStorage.getItem("tasks")||"[]");
task.push(tasks);
localStorage.setItem("tasks",JSON.stringify(task));
const filterDropdown=document.getElementById("category-Filter");
if(filterDropdown) filterDropdown.value="all"
displayTasks();
}
displayTasks();

function displayTasks(filterCategory = "all"){
const list=document.getElementById("expense");
list.innerHTML=""
const tasks=JSON.parse(localStorage.getItem("tasks")||"[]");
let total =0;
tasks.forEach(task=>{
total +=Number(task.amount)

})
document.getElementById("totalExpenses").innerHTML=total;
const filteredTasks=tasks.filter(task=>{
if (filterCategory ==="all")return true
return task.category.toLowerCase()===filterCategory.toLowerCase();

});

filteredTasks.forEach(task=>{
const card=document.createElement("div");
card.innerHTML=`<div class="details">  <p>${ task.description}</p><p class="list.card">${task.amount}</p> 
   <p>${ task.category}</p><button class="delete-Btn" onclick="deleteTask(${task.id})">Delete </button></div>`
list.appendChild(card);
})

}
function filterTask(){
const category=document.getElementById("category-Filter").value;
displayTasks(category);

}
 function clearTasks(){
if(confirm("Delete all Tasks?")){
tasks=[];
localStorage.removeItem("tasks");

}
displayTasks();
 }


function deleteTask(id){
let tasks=JSON.parse(localStorage.getItem("tasks")|| "[]");
tasks=tasks.filter(task=>task.id !==id)
localStorage.setItem("tasks",JSON.stringify(tasks));
displayTasks()
}



