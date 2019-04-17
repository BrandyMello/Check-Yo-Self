class ToDo {
  constructor(id, title, tasks) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
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

