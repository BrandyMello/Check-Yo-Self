class ToDoList {
  constructor(title, tasks) {
    this.id = Date.now();
    this.title = title;
    this.tasks = tasks;
    this.urgent = false;
  }

  saveToStorage() {

  }

  deleteFromStorage () {

  }

  updateToDoList() {

  }

  updateTask() {

  }

}

class Tasks {
  constructor(info) {
    this.info = info;
    this.done = false;
    this.id = Date.now();
  }
}