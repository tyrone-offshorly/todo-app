import { renderProjectForm } from "./ProjectDOM";

const renderSidebar = () => {
  const sidebarContainer = document.querySelector('#sidebar');
  
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const home = document.createElement('li');
  home.textContent = "Home";
  ul.append(home);
  nav.append(ul);

  const newProjectBtn = document.createElement('button');
  newProjectBtn.type = "button";
  newProjectBtn.textContent = "Add new project";

  newProjectBtn.addEventListener('click', renderProjectForm);
  nav.append(newProjectBtn);
  sidebarContainer.append(nav);

};

export default renderSidebar;