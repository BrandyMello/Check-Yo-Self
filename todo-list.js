class ToDo {
  constructor(id, title, tasks) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
    // this.done = false;
    this.urgent = false;
  }

  saveToStorage() {
    localStorage.setItem('newToDo', JSON.stringify(this));
  }

  deleteFromStorage () {

  }

  updateToDoList() {

  }

  updateTask() {

  }

}

// class TaskList {
//   constructor(id, list, done) {
//     this. id = id;
//     this. list = list;
//     this.done = false;
//   }
// }
