import { defaultProject } from "./utils/init.js";
import { projectFormInputs, todoFormInputs } from "./utils/formInputs.js";

import "./reset.css";
import "./styles.css";

import storage from "./controllers/storageController.js";
import data from "./controllers/dataController.js";
import display from "./controllers/displayController.js";

const todoFormContainer = document.querySelector(".u-form-todo-container");
todoFormContainer.appendChild(
  display.renderForm(
    "form-todo",
    "New Todo",
    data.handleTodoForm,
    todoFormInputs,
  ),
);

const projectFormContainer = document.querySelector(
  ".u-form-project-container",
);
projectFormContainer.appendChild(
  display.renderForm(
    "form-project",
    "New Project",
    data.handleProjectForm,
    projectFormInputs,
  ),
);

const projectListContainer = document.querySelector(
  ".u-project-list-container",
);
projectListContainer.appendChild(display.renderProjectList());
