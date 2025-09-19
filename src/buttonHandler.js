import initializeHomepage from "./homePage";
import Project from "./project";

export default function buttonHandler() {
  const newProjectBtn = document.querySelector("#new-project");
  const removeProjectBtn = document.querySelector(".removeProject");
  const dialog = document.querySelector("dialog");
  const closeButton = document.querySelector("#close-button");
  const submitButton = document.querySelector("#submitBtn");
  const projectNameInput = document.querySelector("#project-name-input");
  const errorMsg = document.createElement("p");
  const projectEndDate = document.querySelector("#project-end-date");

  closeButton.addEventListener("click", () => {
    projectNameInput.value = "";
    dialog.close();
  })

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const projectName = projectNameInput.value;


    const projectListString = localStorage.getItem("projectList");
    let projectListArr = [];
    if (projectListString) {
      projectListArr = JSON.parse(projectListString);
    }

    const duplication = projectListArr.some(
      project => project.projectName === projectName
    );

    const noName = projectName.trim() === "";

    if (duplication || noName) {

      errorMsg.style.color = "red";
      errorMsg.style.fontSize = "12";

      if (duplication) {
        errorMsg.textContent = "Cannot create duplicate projects";
      }
      else {
        errorMsg.textContent = "Please input at least 1 character";
      }
      dialog.appendChild(errorMsg);
      projectNameInput.value = "";
      initializeHomepage();
      return;
    }

    if (projectListArr) {
      const newProject = new Project(projectName, []);
      projectListArr.push({
        projectName: newProject.getProjectName(),
        todoList: newProject.getTodoList(),
        projectDueDate: projectEndDate.value,
      });

      localStorage.setItem("projectList", JSON.stringify(projectListArr));

      projectNameInput.value = "";
      dialog.close();

      initializeHomepage();

    }

  });

  newProjectBtn.addEventListener("click", () => {
    errorMsg.textContent = "";
    dialog.showModal();
  });

  document.querySelector("#content").addEventListener("click", (event) => {
    if (event.target.classList.contains("removeProject")) {

      const card = event.target.closest('.card');
      const projectName = card.querySelector('h2').textContent;
      let projectListArr = JSON.parse(localStorage.getItem('projectList'));
      projectListArr = projectListArr.filter(project => project.projectName !== projectName);
      localStorage.setItem('projectList', JSON.stringify(projectListArr));
      initializeHomepage();
    }
  });
}
