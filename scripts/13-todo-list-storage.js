//this list needs to contain objects

const todolist = JSON.parse(localStorage.getItem("tasks")) || [];
updateList();

document.querySelector(".js-add").addEventListener("click", () => addTask());

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
  localStorage.setItem("tasks", JSON.stringify(todolist));
  //console.log(JSON.stringify(todolist));
  let finalhtml = "";
  todolist.forEach((element, i) => {
    let itemhtml = `<div class='task'>${element["task"]}</div>`;
    let datehtml = `<div class='dateout'>${element["datetime"]}</div>`;
    let deletehtml = `<button class='del js-deleteTask'>Delete</button>`;
    let divwrap = `<div class='js-list${i} listrow'>${itemhtml} ${datehtml} ${deletehtml}</div>`;
    finalhtml += divwrap;
    console.log(finalhtml);
  });

  document.querySelector(".js-table").innerHTML = finalhtml;

  document.querySelectorAll(".js-deleteTask").forEach((query, i) => {
    query.addEventListener("click", () => {
      todolist.splice(i, 1);
      updateList();
    });
  });
}
