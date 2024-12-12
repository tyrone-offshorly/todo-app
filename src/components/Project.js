class Project {
  
  constructor(title, description = null) {
    this.title = title;
    this.description = description;
    this.tasks = [];
  }

  changeDescription(description) {
    this.description = description;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  popTask(deleteTasktaskIndex) {
    return this.tasks.splice(taskIndex, 1);
  }
}

export default Project;