class Project {
  
  constructor(title, description = null) {
    this.title = title;
    this.description = description;
  }

  changeDescription(description) {
    this.description = description;
  }
}