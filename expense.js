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
}




