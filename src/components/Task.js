class Task {
  constructor(title, description, priority, isCompleted = false, dueDate = null) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.isCompleted = isCompleted;
    this.dueDate = dueDate;
  }

}

export default Task;