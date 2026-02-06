import { Todo } from "../objects/Todo.js";
import { Project } from "../objects/Project.js";
import storage from "./storageController.js";

export default class DataController {
  static createTodo(inputObj) {}

  static getFormValues(form) {
    const formInputs = Array.from(form.querySelectorAll("input, select"));

    console.log(formInputs);
  }

  static handleTodo(e) {
    e.preventDefault();
    const inputs = Array.from(
      e.target.parentNode.querySelectorAll("input, select"),
    );

    const inputObj = inputs.reduce((acc, input) => {
      acc[input.getAttribute("name")] = input.value;
      return acc;
    }, {});

    storage.saveTodo(
      new Todo(
        inputObj.todoTitle,
        inputObj.todoDesc,
        inputObj.todoDate,
        inputObj.todoPrio,
      ),
      inputObj.todoProject,
    );
  }

  static handleProject(e) {
    e.preventDefault();
    const inputs = Array.from(
      e.target.parentNode.querySelectorAll("input, select"),
    );

    const inputObj = inputs.reduce((acc, input) => {
      acc[input.getAttribute("name")] = input.value;
      return acc;
    }, {});

    storage.saveProject(new Project(inputObj.projectName));
  }
}
