import { Todo } from "../objects/Todo.js";
import { Project } from "../objects/Project.js";
import storage from "./storageController.js";

export default class DataController {
  static createTodo(inputObj) {}

  static getFormValues(form) {
    const formInputs = Array.from(form.querySelectorAll("input, select"));

    console.log(formInputs);
  }

  static handleTodoForm(e) {
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

  static handleTodoCard(e) {
    const todoId = e.target.parentNode.getAttribute("data-id");
    const projectId =
      e.target.parentElement.parentElement.getAttribute("data-id");
    const project = storage.loadProject(projectId);
    project.removeItem("todos", todoId);
    storage.saveProject(project);
    localStorage.removeItem(todoId);
  }

  static handleProjectForm(e) {
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
