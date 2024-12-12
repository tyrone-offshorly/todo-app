import { renderProjectForm, renderTaskForm } from "./FormDOM";

const renderSidebar = (projects) => {
  const projectDiv = document.querySelector('#projects');

  projectDiv.innerHTML = "";

  const newProjectBtn = document.createElement('button');
  newProjectBtn.type = "button";
  newProjectBtn.textContent = "Add new project";
  newProjectBtn.addEventListener('click', renderProjectForm);

  const projectText = document.createElement('p');
  projectText.textContent = "Project";

  const ul = document.createElement('ul');
  projects.forEach((element, index) => {
    const projectItem = document.createElement('li');
    projectItem.textContent = element.title;
    ul.dataset.index = index;
    ul.append(projectItem);
  });


  const newTaskBtn = document.createElement('button');
  newTaskBtn.type = "button";
  newTaskBtn.textContent = "Add new task";
  newTaskBtn.addEventListener('click', renderTaskForm);

  projectDiv.append(newProjectBtn, projectText, ul, newTaskBtn);

};

export default renderSidebar;