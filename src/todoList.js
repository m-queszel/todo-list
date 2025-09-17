export default class TodoList {

  constructor() {
    this.todoList = [];
  }

  addTask(taskIn) {
    this.todoList.push(taskIn);
  }

  removeTask(taskIn) {
    const index = this.todoList.findIndex(task => task.getTitle() === taskIn.getTitle());
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }
  }

  printTaskList() {
    this.todoList.forEach((task) => {
      console.log(`${task.toString()}`);
    })
  }

}
