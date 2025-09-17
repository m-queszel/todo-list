export default class ProjectList {
  constructor() {
    this.projectList = [];
  }

  addProject(projectIn) {
    this.projectList.push(projectIn);
  }
  removeProject(projectIn) {
    const index = this.projectList.findIndex(project => project.getProjectName() === projectIn.getProjectName());
    if (index !== -1) {
      this.projectList.splice(index, 1);
    }
  }

}
