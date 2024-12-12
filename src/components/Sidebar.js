import { renderProjectForm } from "./FormDom";

const renderSidebar = (projects) => {
  const nav = document.querySelector('#navigation');
  nav.innerHTML = "";
  const ul = document.createElement('ul');

  projects.forEach((element, index) => {
    const projectItem = document.createElement('li');
    projectItem.textContent = element.title;
    ul.append(projectItem);
  });

  nav.append(ul);

  const newProjectBtn = document.createElement('button');
  newProjectBtn.type = "button";
  newProjectBtn.textContent = "Add new project";

  newProjectBtn.addEventListener('click', renderProjectForm);
  nav.append(newProjectBtn);

};

export default renderSidebar;