const projects = [
  {title: "Project 1", desc: ""},
  {title: "Project 2", desc: ""},
]

const renderSidebar = () => {
  const sidebarContainer = document.querySelector('#sidebar');
  
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const home = document.createElement('li');
  home.textContent = "Home";
  ul.append(home);
  projects.forEach((project) => {
    const li = document.createElement('li');
    li.textContent = project.title;
    ul.append(li);
  });
  nav.append(ul);

  const newProjectBtn = document.createElement('button');
  newProjectBtn.type = "button";
  newProjectBtn.textContent = "Add new project";
  nav.append(newProjectBtn);
  sidebarContainer.append(nav);

};

export default renderSidebar;