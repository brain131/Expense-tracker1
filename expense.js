class TaskManager{
constructor(description,amount,category){
this.amount=amount;
this.description=description
this.category=category


}

}
function addTask(){
const description=document.getElementById("description").value.trim();
const amount=document.getElementById("amount").value.trim();
const category=document.getElementById("category").value.trim();

const tasks=new TaskManager(description,amount,category);
const task=JSON.parse(localStorage.getItem("tasks")||"[]");
task.push(tasks);
localStorage.setItem("tasks",JSON.stringify(task));
displayTasks();
}
displayTasks();
function displayTasks(){
const list=document.getElementById("expense");
list.innerHTML=""
const tasks=JSON.parse(localStorage.getItem("tasks")||"[]");
tasks.forEach(task=>{
const card=document.createElement("div");
card.innerHTML=`<h3>${task.amount} ${ task.description} ${ task.category}</h3>`
list.appendChild(card);
})

}


