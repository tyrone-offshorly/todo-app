import Project from "./components/Project.js";
import Task from "./components/Task";
import renderSidebar from "./components/Sidebar.js";
(function() {
  const projects = [];

  projects.push(new Project("default"));

  renderSidebar();
})();