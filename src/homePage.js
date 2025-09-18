
export default function initializeHomepage() {


  const mainContainer = document.querySelector("#content");
  const xIcon = document.getElementById("removeProject");

  mainContainer.innerHTML = "";


  const sidebar = document.querySelector("#sidebar");
  sidebar.innerHTML = "";
  const sidebarOptions = document.createElement("ul");
  sidebarOptions.setAttribute("class", "sidebarOptions");
  const sidebarToday = document.createElement("li");
  sidebarToday.textContent = "Today";
  const sidebarWeek = document.createElement("li");
  sidebarWeek.textContent = "This Week"
  const sidebarMonth = document.createElement("li");
  sidebarMonth.textContent = "This Month";
  sidebarOptions.textContent = "Projects Due:";
  sidebarOptions.appendChild(sidebarToday);
  sidebarOptions.appendChild(sidebarWeek);
  sidebarOptions.appendChild(sidebarMonth);
  sidebar.appendChild(sidebarOptions);


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

    const removeProject = xIcon.cloneNode(true);

    card.appendChild(removeProject);
    projectContainer.appendChild(card);
  })

  mainContainer.appendChild(projectContainer);

}
