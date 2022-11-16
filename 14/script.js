let input = document.getElementById("input");
let toDoList = document.getElementById("toDoList");
let delButton = document.querySelectorAll(".del");
let editButton = document.getElementById("editBtn");
let editInput = document.getElementById("editForm");
let modal = document.getElementById("modal");
let closeBtn = document.getElementById("closeBtn");
let editTarget;

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
        let del = document.createElement("i");
        let edit = document.createElement("i");
        td1.innerHTML = tasks[i];
        del.innerHTML = "delete";
        del.classList.add("material-icons");
        del.classList.add("del");
        edit.innerHTML = "edit";
        edit.classList.add("material-icons");
        edit.classList.add("edit");
        td2.appendChild(del);
        td2.appendChild(edit);
        tr.appendChild(td1);
        tr.appendChild(td2);
        del.onclick = removeTask(tr);
        edit.onclick = showModal(tr);
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
    let del = document.createElement("i");
    let edit = document.createElement("i");
    td1.innerHTML = task;
    del.innerHTML = "delete";
    del.classList.add("material-icons");
    del.classList.add("del");
    edit.innerHTML = "edit";
    edit.classList.add("material-icons");
    edit.classList.add("edit");
    td2.appendChild(del);
    td2.appendChild(edit);
    tr.appendChild(td1);
    tr.appendChild(td2);
    del.onclick = removeTask(tr);
    edit.onclick = showModal(tr);
    toDoList.appendChild(tr);


    input.value = "";
    save();
}

function removeTask(tr) {
    return function () {
        tr.remove();
        save();
    }
}

function showModal(tr) {
    return function () {
        modal.hidden = false;
        document.getElementById("background").classList.remove("blurOff");
        document.getElementById("background").classList.add("blurOn");
        editTarget = tr;
        editInput.value = tr.children[0].innerHTML;
    }
}

function closeModal() {
    modal.hidden = true;
    document.getElementById("background").classList.remove("blurOn");
    document.getElementById("background").classList.add("blurOff");
}

closeBtn.onclick = closeModal;

editButton.onclick = function () {
    editTarget.children[0].innerHTML = editInput.value;
    closeModal();
    save();
}

window.onload = load;