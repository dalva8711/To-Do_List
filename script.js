// for checking boxes use classList.toggle() to switch the states

// get user input
const newTaskInput = document.getElementById("newTaskInput");
const taskList = document.getElementById("taskList");

function addTask(){
    if (newTaskInput.value !== ""){
        const newTask = document.createElement("li"); // create new li element to be added to ul
        newTask.innerText = newTaskInput.value; // newtask is given the value of the input
        newTaskInput.value = ""; // input line is reset
        taskList.appendChild(newTask); // new task is added to the list
    }
    else{
        // invlaid input
        alert("Please enter a task");
    }
}

function clearAllTasks(){
    // resests the task list and input line
    taskList.innerHTML = "";
    newTaskInput.value = "";
}

// strike though tasks when clicked
taskList.addEventListener("click", function(event){
    if (event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
});
