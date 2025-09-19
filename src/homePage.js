export default function initializeHomepage() {


  const mainContainer = document.querySelector("#content");
  const xIcon = document.getElementById("removeProject");
  const checkIcon = document.querySelector("#completeProject");
  const dialog = document.querySelector("dialog");
  mainContainer.innerHTML = "";


  const sidebar = document.querySelector("#sidebar");
  sidebar.style.borderRight = "1px solid var(--primary-text-color)";

  const projectContainer = document.createElement("div");

  let projectListArr = [];

  const projectListStr = localStorage.getItem("projectList");

  if (projectListStr) {
    projectListArr = JSON.parse(projectListStr);
  }
  else {
    localStorage.setItem("projectList", JSON.stringify([]));
  }

  const numCards = document.querySelectorAll(".card");
  console.log(numCards);

  projectListArr.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("complete")
    if (project.completed) {
      card.classList.add("completed");
    }
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = project.projectName;
    const cardDueDate = document.createElement("p");
    cardDueDate.setAttribute("id", "cardDueDate");
    if (project.completed === false) {
      cardDueDate.innerHTML = `Deadline: <b>${project.projectDueDate}</b>`;
    }
    else {
      cardDueDate.innerHTML = `Completed On: <b>${project.projectDueDate}</b>`;
    }

    card.appendChild(cardTitle);
    card.appendChild(cardDueDate);

    const removeProject = xIcon.cloneNode(true);
    const completeProject = checkIcon.cloneNode(true);

    card.appendChild(removeProject);
    card.appendChild(completeProject);
    projectContainer.appendChild(card);
  })
  const defaultCard = document.querySelector("#default-card");
  if (defaultCard) {
    sidebar.appendChild(defaultCard);
  }
  mainContainer.style.justifyItems = "";
  mainContainer.style.gridRow = "2 / 4";
  mainContainer.style.gridColumn = "2 / 4"
  mainContainer.appendChild(projectContainer);

}
