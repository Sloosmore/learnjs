//this list needs to contain objects
const todolist = [];

function addTask() {
  const itemObj = document.querySelector(".js-item");
  const dateObj = document.querySelector(".js-date");
  const inHtml = "";

  //adding to list first
  const item = itemObj.value;
  const date = dateObj.value;
  const innerlist = { task: item, datetime: date };
  todolist.push(innerlist);

  itemObj.value = "";
  dateObj.vale = "";

  //update list
  updateList();

  console.log(todolist);
}

function enterKey(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

function deleteTask(i) {
  todolist.splice(i, 1);
  updateList();
}

function updateList() {
  const len = todolist.length;
  console.log(todolist);
  let finalhtml = "";
  for (i = 0; i < len; i++) {
    let itemhtml = `<div class='task'>${todolist[i]["task"]}</div>`;
    let datehtml = `<div class='dateout'>${todolist[i]["datetime"]}</div>`;
    let deletehtml = `<button class='del' onclick='deleteTask(${i})'>Delete</button>`;
    let divwrap = `<div class='js-list${i} listrow'>${itemhtml} ${datehtml} ${deletehtml}</div>`;
    finalhtml += divwrap;
    console.log(finalhtml);
  }
  document.querySelector(".table").innerHTML = finalhtml;
}
