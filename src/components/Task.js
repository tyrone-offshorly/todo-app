class Task {
  constructor(title, description, isCompleted = false, dueDate = null) {
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
    this.dueDate = dueDate;
  }

}