export default class Project {

  constructor(projectNameIn, todoListIn) {
    this.projectName = projectNameIn;
    this.todoList = todoListIn;
  }
  getProjectName() {
    return this.projectName;
  }
  getTodoList() {
    return this.todoList;
  }

}
