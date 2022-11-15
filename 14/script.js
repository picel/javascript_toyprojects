let input = document.getElementById("input");
let toDoList = document.getElementById("toDoList");

let TODOLIST = "todolist";

function load() {
    let tasks = localStorage.getItem(TODOLIST);
    if (tasks === null) {
        return;
    }
    tasks = JSON.parse(tasks);
    for (let i = 0; i < tasks.length; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.innerHTML = tasks[i];
        td2.innerHTML = "X";
        td2.onclick = removeTask(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        toDoList.appendChild(tr);
    }
}

function save() {
    let tasks = [];
    for (let i = 0; i < toDoList.children.length; i++) {
        tasks.push(toDoList.children[i].children[0].innerHTML);
    }
    localStorage.setItem(TODOLIST, JSON.stringify(tasks));
}

function addTask() {
    let task = input.value;
    if (task === "") {
        return;
    }
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerHTML = task;
    td2.innerHTML = "X";
    td2.onclick = removeTask(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    toDoList.appendChild(tr);
    input.value = "";
    save();
}

function removeTask(tr) {
    return function () {
        toDoList.removeChild(tr);
        save();
    }
}

window.onload = load;