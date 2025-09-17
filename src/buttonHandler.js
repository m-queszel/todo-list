import initializeHomepage from "./homePage";
import Project from "./project";

export default function buttonHandler() {
  const newProjectBtn = document.querySelector("#new-project");
  newProjectBtn.addEventListener("click", () => {
    const projectListString = localStorage.getItem("projectList");
    let projectListArr = [];
    if (projectListString) {
      projectListArr = JSON.parse(projectListString);
    }
    const newProject = new Project("New Test Project", []);
    projectListArr.push({
      projectName: newProject.getProjectName(),
      todoList: newProject.getTodoList(),
    });
    localStorage.setItem("projectList", JSON.stringify(projectListArr));
    initializeHomepage();
  })

}
