const addTask = document.querySelector('.add-task-image');
const tasks = document.querySelector('.list-items');
const lists = [];

const listItems = document.querySelector('.generated-list-left')
var taskItem = document.querySelector('#task-item')
var makeListBtn = document.querySelector('.make-task-card-btn')
var taskTitle = document.querySelector('.task-title')
var taskBoard = document.querySelector('.right-side')
// const addTaskBtn = document.querySelector('add-task-image');

addTask.addEventListener('click', addToList)


function addToList(e) {
  e.preventDefault();
  if(taskItem.value === "") {
    return;
  }
  tasks.innerHTML +=
    `
    <li class="inserted-list-item" id="inserted-list-item">
      <img src="images/delete.svg" class="delete-btn">
      <p>${taskItem.value}</p>
    </li>`
    clearTaskInput()
  }

function clearTaskInput() {
  var taskForm = document.querySelector('.add-task-bar')
  taskForm.reset();
}

tasks.addEventListener('click', function (e) {
  if(e.target.className === 'delete-btn') {
    e.target.closest('.inserted-list-item').remove();
  }
});

makeListBtn.addEventListener('click', function(e) {
  taskBoard.insertAdjacentHTML('afterbegin',`
    <article class="task-list-cards">
      <div class="card-title">
        <h2>${taskTitle.value}</h2>
      </div>
      <div class="card-list">
        <ul class="generated-task-list">
        ${taskItem.value}
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
})


console.log("hello");
 


//-------------Insert Card-----------------------------//
// var makeTaskBtn = document.querySelector('make-task-card-btn');
// makeTaskBtn.addEventListener('click', postToBoard)

// function postToBoard(e) {
//   wrapper.insertAdjacentHTML('afterbegin',
// `<article class="task-list-cards">
//       <div class="card-title">
//         <h2>${create.['task-title']}</h2>
//       </div>
//       <div class="card-list">
//         <ul class="generated-task-list">
//         ${create.info}
//         </ul>
//       </div>
//       <div class="card-navigation">
//         <img src="images/urgent.svg" alt="mark-urgent-button" class="mark-urgent-btn">
//         <label class="mark-urgent-label">Urgent</label>
//         <img src="images/delete.svg" alt="delete-list-button" class="delete-list-btn">
//         <label class="delete-list-btn-label">Delete</label>
//       </div>    
//     </article> `
// );}