export const canAddItem = {
  addItem(prop, item) {
    if (!Array.isArray(this[prop])) {
      throw new Error("The property you provided is not an array");
    }
    this[prop].push(item);
  },
};

export const canRemoveItem = {
  removeItem(prop, itemId) {
    if (!Array.isArray(this[prop])) {
      throw new Error("The property you provided is not an array");
    }
    const itemIndex = this[prop].findIndex((item) => {
      return item === itemId;
    });
    if (itemIndex !== -1) {
      this[prop].splice(itemIndex, 1);
    }
  },
};

export const canGetItems = {
  getItems(prop) {
    if (!Array.isArray(this[prop])) {
      throw new Error("The property you provided is not an array");
    }
    return this[prop];
  },
};
