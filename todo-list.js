class ToDo {
  constructor(id, title, tasks) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
    this.urgent = false;
  }

  saveToStorage(lists) {
    localStorage.setItem('newToDo', JSON.stringify(lists));
  }

  deleteFromStorage () {

  }

  updateToDoList() {

  }

  updateTask() {

  }

}

