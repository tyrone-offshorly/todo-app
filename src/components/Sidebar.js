import { renderProjectForm, renderTaskForm } from "./FormDOM";

const renderSidebar = (projects) => {
  const nav = document.querySelector('#navigation');
  nav.innerHTML = "";
  const ul = document.createElement('ul');

  projects.forEach((element, index) => {
    const projectItem = document.createElement('li');
    projectItem.textContent = element.title;
    ul.append(projectItem);
  });

  const newProjectBtn = document.createElement('button');
  newProjectBtn.type = "button";
  newProjectBtn.textContent = "Add new project";
  newProjectBtn.addEventListener('click', renderProjectForm);

  const newTaskBtn = document.createElement('button');
  newTaskBtn.type = "button";
  newTaskBtn.textContent = "Add new task";
  newTaskBtn.addEventListener('click', renderTaskForm);
  nav.append(ul, newProjectBtn, newTaskBtn);

};

export default renderSidebar;