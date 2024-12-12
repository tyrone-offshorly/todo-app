class Task {
  constructor(title, description, priority, isCompleted = false, dueDate = null, project = null) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.isCompleted = isCompleted;
    this.dueDate = dueDate;
  }

  get getTitleAndDescription() {
    return (this.title, this.description)
  }
}

export default Task;