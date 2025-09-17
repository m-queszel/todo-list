export default class TodoTask {

  //Each task will require a title and a due date. If no due date is specified, the dueDate will be the current day the task is created.
  constructor(titleIn, dueDateIn) {
    this.title = titleIn;
    this.date = dueDateIn;
    this.isCompleted = false;
  }

  setTitle(newTitleIn) {
    this.title = newTitleIn;
  }

  setDescription(stringIn) {
    this.description = stringIn;
  }

  setPriority(numIn) {
    this.priority = numIn;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getPriority() {
    return this.priority;
  }

  markCompleted() {
    this.isComplete = true;
  }

  toString() {
    return `${this.title}: ${this.description === undefined ? "" : this.getDescription()}\n${this.isCompleted ? "Task Completed" : "Task Incomplete"}`;
  }

}
