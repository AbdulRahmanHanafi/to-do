let fullName = document.getElementById("name");
let age = document.getElementById("age");
let submitBtn = document.getElementById("submit");
let list = document.getElementById("to-do");

function AddToDo() {
  if (fullName.value === "" || age.value === "") {
    return;
  }
  var listItem = document.createElement("li");
  listItem.classList.add("item");
  var nameH3 = document.createElement("h3");
  nameH3.textContent = fullName.value;

  var ageH3 = document.createElement("h3");
  ageH3.textContent = age.value;

  var remove = document.createElement("button");
  remove.type = "button";
  remove.id = "remove";
  remove.textContent = "remove";

  listItem.appendChild(nameH3);
  listItem.appendChild(ageH3);
  listItem.appendChild(remove);
  list.appendChild(listItem);

  fullName.value = "";
  age.value = "";
}

function RemoveToDo(removedElement) {
  removedElement.parentElement.remove();
}

submitBtn.addEventListener("click", AddToDo);
fullName.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    AddToDo();
  }
});
age.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    AddToDo();
  }
});

list.addEventListener("click", function (event) {
  var obj = event.target;
  //console.log(obj.id);
  if (obj.id === "remove") {
    obj.parentElement.remove();
  }
});
