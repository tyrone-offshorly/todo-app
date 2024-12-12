import Project from "./components/Project.js";
import Task from "./components/Task";
import renderSidebar from "./components/Sidebar.js";

const main = (function() {
  const projects = [];

  projects.push(new Project("default"));

  renderSidebar();


  const addProject = function(project) { 
    projects.push(project);
    console.log(projects);
  }

  return {addProject};
})();

export { main };