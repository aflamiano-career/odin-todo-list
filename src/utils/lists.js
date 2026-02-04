import App from "../objects/App.js";
import Project from "../objects/Project.js";

const canAddItem = {
  addItem(prop, item) {
    if (!Array.isArray(this[prop])) {
      throw new Error("Prop is not an array");
    }
    this[prop].push(item);
  },
};

const canRemoveItem = {
  removeItem(prop, itemId) {
    if (!Array.isArray(this[prop])) {
      throw new Error("Prop is not an array");
    }
    let itemIndex = this[prop].findIndex((item) => item.id === itemId);
    if (itemIndex > 0) {
      this[prop].splice(itemIndex, 1);
    }
  },
};

const canGetItems = {
  getItems(prop) {
    if (!Array.isArray(this[prop])) {
      throw new Error("Prop is not an array");
    }
    return this[prop];
  },
};

Object.assign(App.prototype, canAddItem);
Object.assign(App.prototype, canGetItems);
Object.assign(App.prototype, canRemoveItem);
Object.assign(Project.prototype, canAddItem);
Object.assign(Project.prototype, canGetItems);
Object.assign(Project.prototype, canRemoveItem);
