export default function initializeHomepage() {


  const mainContainer = document.querySelector("#content");
  const xIcon = document.getElementById("removeProject");
  const dialog = document.querySelector("dialog");
  mainContainer.innerHTML = "";


  const sidebar = document.querySelector("#sidebar");

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
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = project.projectName;
    const cardDueDate = document.createElement("p");
    cardDueDate.innerHTML = `Deadline: <b>${project.projectDueDate}</b>`;
    card.appendChild(cardTitle);
    card.appendChild(cardDueDate);

    const removeProject = xIcon.cloneNode(true);

    card.appendChild(removeProject);
    projectContainer.appendChild(card);
  })
  const defaultCard = document.querySelector("#default-card");
  if (defaultCard) {
    sidebar.appendChild(defaultCard);
  }
  mainContainer.appendChild(projectContainer);

}
