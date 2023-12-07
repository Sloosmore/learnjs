const td1 = [];
// const td1 = JSON.parse(localStorage.getItem("list1")) || const td1 =  [];
console.log(td1);

function addToTodo() {
  const action = document.querySelector(".js-in1");
  td1.push(action.value);
  console.log(td1);
  //localStorage.setItem("list1", JSON.stringify(action));
}

function allowEnter(event) {
  const action = document.querySelector(".js-in1");
  if (event.key === "Enter") {
    addToTodo();

    action.value = "";
  }
}
