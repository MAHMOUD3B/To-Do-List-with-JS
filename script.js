// declare variables
let theInput,
  addBtn,
  tasksContainer,
  counter,
  completed,
  numOfTasks,
  numOfCompletedTasks;

theInput = document.querySelector(".add-task .the-input");
addBtn = document.querySelector(".add-task .plus");
tasksContainer = document.querySelector(".tasks-content");
counter = document.querySelector(".tasks-number span");
completed = document.querySelector(".tasks-completed span");

numOfTasks = 0;
numOfCompletedTasks = 0;

// focus on the input
window.onload = function () {
  theInput.focus();
};

// add task
addBtn.addEventListener("click", () => {
  if (theInput.value === "") {
    document.querySelector(".no-tasks").innerHTML = "Please add task";
  } else {
    let noTasksMsg = document.querySelector(".tasks-content .no-tasks");
    if (document.body.contains(document.querySelector(".no-tasks"))) {
      noTasksMsg.remove();
    }

    // create elements of the task
    let taskBox = document.createElement("div");
    let task = document.createElement("p");
    let deleteBtn = document.createElement("span");

    taskBox.className = "task-box";
    deleteBtn.className = "delete";

    // append elements inside others
    deleteBtn.innerText = "delete";
    task.append(theInput.value);
    taskBox.appendChild(task);
    taskBox.appendChild(deleteBtn);
    tasksContainer.appendChild(taskBox);

    // increase number of tasks on addition
    numOfTasks++;
    counter.innerHTML = numOfTasks;

    // reset the input
    theInput.value = "";
    theInput.focus();
  }
});

// delete task
document.addEventListener("click", (e) => {
  if (e.target.className === "delete") {
    numOfTasks--;
    if (numOfTasks === 0) {
      noTasks();
    }
    counter.innerHTML = numOfTasks;
    e.target.parentNode.remove();

    if (e.target.parentNode.classList.contains("finished")) {
      numOfCompletedTasks--;
      completed.innerHTML = numOfCompletedTasks;
    }
  }

  // completed tasks
  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
    if (e.target.classList.contains("finished")) {
      numOfCompletedTasks++;
      completed.innerHTML = numOfCompletedTasks;
    } else {
      numOfCompletedTasks--;
      completed.innerHTML = numOfCompletedTasks;
    }
  }
});

const noTasks = () => {
  let msg = document.createElement("p");
  msg.className = "no-tasks";
  msg.innerHTML = "no tasks add";
  tasksContainer.append(msg);
};
