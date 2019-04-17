const addTask = document.querySelector('.add-task-image');
const tasks = document.querySelector('.list-items');
const listItems = document.querySelector('.generated-list-left');
var taskItem = document.querySelector('.task-item');
var makeListBtn = document.querySelector('.make-task-card-btn')
var taskTitle = document.querySelector('.task-title')
var cardList = [];
const lists = [];

addTask.addEventListener('click', addToList)


function addToList(e) {
  e.preventDefault();
  tasks.innerHTML += `
    <li class="inserted-list-item" id="inserted-list-item">
      <img src="images/delete.svg" class="delete-btn">
      <p>${taskItem.value}</p>
    </li>`
    cardList.push(taskItem.value)
    clearTaskInput();
}

function clearTaskInput() {
  var taskForm = document.querySelector('.add-task-bar');
  taskForm.reset();
}

function clearTaskBar() {
  cardList = [];
  taskTitle.value = "";
}

tasks.addEventListener('click', function (e) {
  if(e.target.className === 'delete-btn') {
    var item = e.target.closest('.inserted-list-item')
    cardList.splice(cardList.indexOf(item.childNodes[3].innerText), 1)
    item.remove();
  }
});

function clearTempList() {
  tasks.innerHTML = "";
}

makeListBtn.addEventListener('click', function(e) {
   if (taskTitle.value === "") {
    alert('Please, add a title!');
    return
  }
  var newToDo = new ToDo(Date.now(), taskTitle.value, cardList);
  lists.push(newToDo);
  console.log(newToDo)
  newToDo.saveToStorage(lists);
  var taskBoard = document.querySelector('.right-side')
  taskBoard.innerHTML += (`
    <article class="task-list-cards" data-id="${newToDo.id}">
      <div class="card-title">
        <h2>${newToDo.title}</h2>
      </div>
      <div class="card-list">
        <ul class="generated-task-list">
        ${cardList.map(toDo => `
          <li class="list-task"><input type="checkbox">  ${toDo}
          </li>`).join('')}
        </ul>
      </div>
      <div class="card-navigation">
        <img src="images/urgent.svg" alt="mark-urgent-button" class="mark-urgent-btn">
        <label class="mark-urgent-label">Urgent</label>
        <img src="images/delete.svg" alt="delete-list-button" class="delete-list-btn">
        <label class="delete-list-btn-label">Delete</label>
      </div>    
    </article> `
);
clearTempList()
clearTaskBar();
})
 
