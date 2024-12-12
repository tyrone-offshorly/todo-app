import Project from "./components/Project.js";
import Task from "./components/Task";
import renderSidebar from "./components/Sidebar.js";

const main = (function() {
  const projects = [];

  projects.push(new Project("default"));

  renderSidebar(projects);


  const addProject = function(project) { 
    projects.push(project);
    renderSidebar(projects);
  }

  return {addProject};
})();

export { main };