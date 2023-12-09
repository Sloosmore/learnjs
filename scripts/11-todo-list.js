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

const td2 = [];

function complexTodo() {
  let listHTML = "";
  const action = document.querySelector(".js-in2");
  td2.push(action.value);
  console.log(td2);
  i = td2.length;
  for (i = 0; i < td2.length; i++) {
    listHTML += `<p>${td2[i]}</p>`;
  }
  document.querySelector(".list").innerHTML = listHTML;
}

function allowEnter2(event) {
  const action = document.querySelector(".js-in2");
  if (event.key === "Enter") {
    complexTodo();

    action.value = "";
  }
}
