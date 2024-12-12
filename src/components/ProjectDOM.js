import { main } from "..";
import Project from "./Project";

const renderProjectForm = function() {
  const body = document.body;

  // form for the body

  const form = document.createElement("form");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.required = true;
  titleInput.name = "title";
  titleInput.id = "title";

  const titleLabel = document.createElement("label");
  titleLabel.for = titleInput.id;
  titleLabel.textContent = "Title of the project (required)";
  
  const descInput = document.createElement("input");
  descInput.type = "text";
  descInput.name = "desc";
  descInput.id = "desc";

  const descLabel = document.createElement("label");
  descLabel.for = descInput.id;
  descLabel.textContent = "Description of the Project (optional)";

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Add";

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    main.addProject(new Project(titleInput.value, descInput.value));
  });

  
  form.append(titleLabel, titleInput, descLabel, descInput, submitBtn);
  body.append(form);
  
}


export {renderProjectForm};