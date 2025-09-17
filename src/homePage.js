export default function initializeHomepage() {

  const mainContainer = document.querySelector("#content");
  const sidebar = document.querySelector("#sidebar");

  const projectContainer = document.createElement("div");

  const projectList = localStorage.getItem("projectList");

  if (projectList !== null) {
    projectList.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      const cardTitle = document.createElement("h2");
      cardTitle.textContent = project.getProjectName();
      card.appendChild(cardTitle);
      projectContainer.appendChild(card);
    })
  }

}
