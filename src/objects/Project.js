import {
  canAddItem,
  canRemoveItem,
  canGetItems,
} from "../utils/composition.js";

class Project {
  constructor(name) {
    this._id = crypto.randomUUID();
    this.name = name;
    this.todos = [];
  }

  get id() {
    return this._id;
  }

  set id(newId) {
    this._id = newId;
  }
}

export { Project };

Object.assign(Project.prototype, canAddItem);
Object.assign(Project.prototype, canRemoveItem);
Object.assign(Project.prototype, canGetItems);
