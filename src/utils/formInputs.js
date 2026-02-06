import display from "../controllers/displayController.js";
import storage from "../controllers/storageController.js";
import { Todo } from "../objects/Todo.js";

const projectFormInputs = [
  display.renderFormInput("project-name", "projectName", "Name", "text"),
];

const todoFormInputs = [
  display.renderFormInput("todo-title", "todoTitle", "Title", "text"),
  display.renderFormInput("todo-desc", "todoDesc", "Description", "text"),
  display.renderFormInput("todo-date", "todoDate", "Due date", "date"),
  display.renderFormSelect(
    "todo-prio",
    "todoPrio",
    "Priority",
    Todo.priorities,
  ),
  display.renderFormSelect(
    "todo-project",
    "todoProject",
    "Project",
    storage.loadProjects(),
  ),
];

export { projectFormInputs, todoFormInputs };
