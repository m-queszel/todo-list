import initializeHomepage from "./homePage";
import initializeAboutPage from "./aboutPage";
import Project from "./project";
import confetti from "canvas-confetti";

export default function buttonHandler() {
  const newProjectBtn = document.querySelector("#default-card");
  const removeProjectBtn = document.querySelector(".removeProject");
  const dialog = document.querySelector("dialog");
  const closeButton = document.querySelector("#close-button");
  const submitButton = document.querySelector("#submitBtn");
  const projectNameInput = document.querySelector("#project-name-input");
  const errorMsg = document.createElement("p");
  const projectEndDate = document.querySelector("#project-end-date");
  const aboutPage = document.querySelector(".about");
  const homePage = document.querySelector(".home");
  const mainContainer = document.querySelector("#content");
  const sidebar = document.querySelector(".sidebar");
  const defaultCard = document.querySelector("#default-card");
  const completeProjectBtn = document.querySelector("#completeProject");

  closeButton.addEventListener("click", () => {
    projectNameInput.value = "";
    dialog.close();
  })

  aboutPage.addEventListener("click", () => {
    mainContainer.innerHTML = "";
    initializeAboutPage();
  })

  homePage.addEventListener("click", () => {
    mainContainer.innerHTML = "";
    initializeHomepage();
    sidebar.style.display = "";
    sidebar.appendChild(defaultCard);

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
      if (errorMsg.parentNode) {
        errorMsg.parentNode.removeChild(errorMsg);
      }
      errorMsg.style.color = "red";
      errorMsg.style.fontSize = "12px";
      errorMsg.textContent = duplication
        ? "Cannot create duplicate projects"
        : "Please input at least 1 character";
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
        completed: false,
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
      card.classList.add("shrink-remove");

      card.addEventListener('animationend', () => {
        card.remove();

        const projectName = card.querySelector('h2').textContent;
        let projectListArr = JSON.parse(localStorage.getItem('projectList'));
        projectListArr = projectListArr.filter(project => project.projectName !== projectName);
        localStorage.setItem('projectList', JSON.stringify(projectListArr));
      },);
    }
  });

  document.querySelector("#content").addEventListener("click", (event) => {
    if (event.target.classList.contains("completeProject")) {
      const card = event.target.closest('.card');
      const projectName = card.querySelector('h2').textContent;
      let projectListArr = JSON.parse(localStorage.getItem('projectList'));

      projectListArr = projectListArr.map(project => {
        if (project.projectName === projectName) {
          return { ...project, completed: true };
        }
        return project;
      });
      localStorage.setItem('projectList', JSON.stringify(projectListArr));
      card.classList.add("completed");

      blastConfetti();
      initializeHomepage();
    }
  });

}

function blastConfetti() {

  confetti({
    particleCount: 150,
    origin: { x: 0.5, y: 1 },
    spread: 180,
    startVelocity: 45
  });

}
