import { defaultProject } from "./utils/init.js";

import "./reset.css";
import "./styles.css";

import storage from "./controllers/storageController.js";
import data from "./controllers/dataController.js";
import display from "./controllers/displayController.js";

const todoFormContainer = document.querySelector(".u-form-todo-container");
todoFormContainer.appendChild(display.renderTodoForm());
const projectListContainer = document.querySelector(
  ".u-project-list-container",
);
projectListContainer.appendChild(display.renderProjectList());
