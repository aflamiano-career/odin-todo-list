class Todo {
  constructor(title, desc, dueDate, priority) {
    this._id = crypto.randomUUID();
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  get id() {
    return this._id;
  }

  set id(newId) {
    this._id = newId;
  }

  static priorities = {
    1: "Low",
    2: "Medium",
    3: "High",
  };
}

export { Todo };
