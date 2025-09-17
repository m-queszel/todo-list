
export default function initializeHomepage() {


  const mainContainer = document.querySelector("#content");
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
    card.appendChild(cardTitle);
    projectContainer.appendChild(card);
  })

  mainContainer.appendChild(projectContainer);

}
