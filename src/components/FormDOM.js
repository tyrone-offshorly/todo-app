import { main } from "..";
import Project from "./Project";
import Task from "./Task";

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
    form.reset();
  });

  
  form.append(titleLabel, titleInput, descLabel, descInput, submitBtn);
  body.append(form);
  
}

const renderTaskForm = function() {
  const body = document.body;

  // Create the form
  const form = document.createElement("form");

  // Title input
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.required = true;
  titleInput.name = "title";
  titleInput.id = "task-title";
  titleInput.placeholder = "Task Title";

  const titleLabel = document.createElement("label");
  titleLabel.htmlFor = titleInput.id;
  titleLabel.textContent = "Title (required)";

  // Description input
  const descInput = document.createElement("input");
  descInput.type = "text";
  descInput.name = "desc";
  descInput.id = "task-desc";
  descInput.placeholder = "Task Description";

  const descLabel = document.createElement("label");
  descLabel.htmlFor = descInput.id;
  descLabel.textContent = "Description";

  // Priority input (dropdown)
  const priorityInput = document.createElement("select");
  priorityInput.name = "priority";
  priorityInput.id = "task-priority";

  const priorityLabel = document.createElement("label");
  priorityLabel.htmlFor = priorityInput.id;
  priorityLabel.textContent = "Priority";

  const priorities = ["Low", "Medium", "High"];
  priorities.forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority.toLowerCase();
    option.textContent = priority;
    priorityInput.append(option);
  });

  // Due Date input
  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "dueDate";
  dueDateInput.id = "task-dueDate";

  const dueDateLabel = document.createElement("label");
  dueDateLabel.htmlFor = dueDateInput.id;
  dueDateLabel.textContent = "Due Date";

  // Is Completed checkbox
  const isCompletedInput = document.createElement("input");
  isCompletedInput.type = "checkbox";
  isCompletedInput.name = "isCompleted";
  isCompletedInput.id = "task-isCompleted";

  const isCompletedLabel = document.createElement("label");
  isCompletedLabel.htmlFor = isCompletedInput.id;
  isCompletedLabel.textContent = "Completed";

  // Submit button
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Add Task";

  // Event listener for form submission
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const newTask = new Task(
      titleInput.value,
      descInput.value,
      priorityInput.value,
      isCompletedInput.checked,
      dueDateInput.value
    );

    main.addTaskToProject(0, newTask);
    form.reset(); // Clear the form after submission
  });

  // Append elements to form
  form.append(
    titleLabel,
    titleInput,
    descLabel,
    descInput,
    priorityLabel,
    priorityInput,
    dueDateLabel,
    dueDateInput,
    isCompletedLabel,
    isCompletedInput,
    submitBtn
  );

  // Append form to body
  body.append(form);
  
}


export {renderProjectForm, renderTaskForm};