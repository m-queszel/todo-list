export default function initializeAboutPage() {
  const mainContainer = document.querySelector("#content");
  const sidebar = document.querySelector("#sidebar")
  sidebar.innerHTML = "";
  sidebar.style.display = "none";

  const subContainer = document.createElement("div");
  subContainer.classList.add("subcontainer");
  const title = document.createElement("h1");
  title.innerHTML = "About This Mini-Project:";
  const text = document.createElement("p");
  text.innerHTML = "This is just a small project of creating the classic Todo list. Although it isn't necessarily a Todo list, it's a project board that has similar function (e.g., You can create and remove projects and assign due dates to them). The project card will display the inputted deadline, and can then be removed by the user by clicking the X icon. The primary goal of this project was to gain hands-on experience working with localStorage and converting JavaScript objects to be parsed or stringified to/from JSON and placed in localStorage."
  subContainer.appendChild(title);
  subContainer.appendChild(text);

  mainContainer.appendChild(subContainer);

}
