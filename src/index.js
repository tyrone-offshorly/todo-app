import Project from "./components/Project.js";
import Task from "./components/Task";
import renderSidebar from "./components/Sidebar.js";

import "./styles/styles.css";

const main = (function() {
  const projects = [];

  projects.push(new Project("General"));
  projects.push(new Project("Project 1"));
  projects.push(new Project("Project 2"));

  renderSidebar(projects);


  const addProject = function(project) { 
    projects.push(project);
    renderSidebar(projects);
  }

  const addTaskToProject = function(projectIndex, task) {
    projects[projectIndex].tasks.push(task);
    console.log(projects);
  }

  return {addProject, addTaskToProject};
})();

export { main };