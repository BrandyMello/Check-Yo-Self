const addTask = document.querySelector('.add-task-image');
const tasks = document.querySelector('.list-items');
const lists = [];

const listItems = document.querySelector('.generated-list-left')
var taskItem = document.querySelector('#task-item')

// const addTaskBtn = document.querySelector('add-task-image');

addTask.addEventListener('click', addToList)


function addToList(e) {
  e.preventDefault();
  tasks.innerHTML +=
    `
    <li class="inserted-list-item">
      <img src="images/delete.svg" class="delete-btn">
      <p>${taskItem.value}</p>
    </li>`
  }




  // const text = (document.querySelector('.task-item-input')).innerContent;
  // const task = {
  //   info: 'info',
  //   done: false,
  //   // id,
  // };

  
  // const text = (this.querySelector('.task-item'));
  
  // this.reset();
  
// }



console.log("hello");
  // if(listItems.value === "") {
  //   return
  // } else {
  //   listItems.innerHTML +=
  //   `
  //   <img src="delete.svg">
  //   <ul>
  //       <li> ${innerContent.document.querySelector('.task-item').value}
  //       </li>
  //     </ul>`
  // }

// taskList.addEventListener('submit', addToList);
// addTask.addEventListener('click', )

// addTask.addEventListener('submit', addTask);

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