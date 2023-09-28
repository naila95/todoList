let btn = document.querySelector(".btn");
let input = document.querySelector("#input");
let lists = document.querySelector(".lists");

btn.addEventListener("click", function () {
  if (input.value === "") {
    alert("You must write something!");
  } else {
    let newTask = document.createElement("div");
    newTask.classList.add("list-item");
    newTask.innerHTML = `<div class="list-content">
    <h5 class="task">${input.value}</h5>
  </div>
  <div class="list-icon">
  <i class="fa-regular fa-trash-can"></i>
</div>`;
    lists.append(newTask);
    input.value = "";
  }
});

lists.addEventListener("click", function (e) {
  if (e.target.tagName === "H5") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "I") {
    e.target.parentElement.parentElement.remove();
  }
});
