import TodoTask from "./todoTask";
import TodoList from "./todoList";
import Project from "./project";
import { format } from "date-fns";

export function testProgram() {

  const project1 = new Project("My First Project");
  const todoList = new TodoList();

  const task1 = new TodoTask("doing laundry", format(new Date(2025, 6, 12), "MM/dd/yyyy"));
  const task2 = new TodoTask("assignment", format(new Date(2025, 6, 13), "MM/dd/yyyy"));
  const task3 = new TodoTask("oil change", format(new Date(2025, 6, 14), "MM/dd/yyyy"));
  const task4 = new TodoTask("vet appointment", format(new Date(2025, 6, 15), "MM/dd/yyyy"));

  todoList.addTask(task1);
  todoList.addTask(task2);
  todoList.addTask(task3);
  todoList.addTask(task4);

  todoList.printTaskList();

}


