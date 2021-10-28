showtask();

let addTaskInput = document.getElementById("addtaskinput");
let addtaskBtn = document.getElementById("addtaskbtn");

addtaskBtn.addEventListener("click", function () {
  addTaskInputval = addTaskInput.value;
  if (addTaskInputval.trim() != 0) {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
      taskobj = [];
    } else {
      taskobj = JSON.parse(webtask);
    }

    taskobj.push(addTaskInputval);
    localStorage.setItem("localtask", JSON.stringify(taskobj));
  }
  addTaskInput.value = "";
  showtask();
});
function showtask() {
  let webtask = localStorage.getItem("localtask");
  if (webtask == null) {
    taskobj = [];
  } else {
    taskobj = JSON.parse(webtask);
  }
  let html = "";
  let addedTaskTableList = document.getElementById("addedtasklist");

  taskobj.forEach((item, index) => {
    html += `<tr>
    <th scope="row">${index + 1}</th>
    <td>${item}</td>
    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
    
    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
</tr>`;
  });
  addedTaskTableList.innerHTML = html;
}
// edittask
function edittask(index) {
  let saveIndex = document.getElementById("saveindex");
  let addtaskBtn = document.getElementById("addtaskbtn");
  let savetaskBtn = document.getElementById("savetaskbtn");
  let webtask = localStorage.getItem("localtask");
  saveIndex.value = index;
  let taskobj = JSON.parse(webtask);
  addTaskInput.value = taskobj[index];
  addtaskBtn.style.display = "none";
  savetaskBtn.style.display = "block";
}

// savetask
let savetaskBtn = document.getElementById("savetaskbtn");

savetaskBtn.addEventListener("click", function () {
  let webtask = localStorage.getItem("localtask");
  let taskobj = JSON.parse(webtask);
  let saveIndex = document.getElementById("saveindex").value;
  taskobj[saveIndex] = addTaskInput.value;
  localStorage.setItem("localtask", JSON.stringify(taskobj));
  addTaskInput.value = "";
  showtask();
  savetaskBtn.style.display = "none";
  addtaskBtn.style.display = "block";
});

// detelet function
function deleteitem(index) {
  let webtask = localStorage.getItem("localtask");
  let taskobj = JSON.parse(webtask);

  taskobj.splice(index, 1);
  localStorage.setItem("localtask", JSON.stringify(taskobj));
  showtask();
}

// dtelete all

let deleteAll = document.getElementById("deleteallbtn");
deleteAll.addEventListener("click", function () {
  let webtask = localStorage.getItem("localtask");
  let taskobj = JSON.parse(webtask);
  if (webtask == null) {
    taskobj = [];
  } else {
    taskobj = JSON.parse(webtask);
    taskobj = [];
  }

  localStorage.setItem("localtask", JSON.stringify(taskobj));
  showtask();
});
