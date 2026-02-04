import App from "./objects/App.js";
import Project from "./objects/Project.js";
import { todos } from "./dummy/todos.js";

import "./utils/lists.js";

const app = new App();
const defaultProject = new Project("Default");
app.addItem("projects", defaultProject);

console.log(app.getItems("projects"));
