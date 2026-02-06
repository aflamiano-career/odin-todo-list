import { Project } from "../objects/Project.js";
import storage from "../controllers/storageController.js";
import { populateProjects, populateTodos } from "../dummy/data.js";

const defaultProject = (() => {
  if (!localStorage.getItem("Projects")) {
    const project = new Project("Default");
    storage.saveProject(project);
    return project;
  } else {
    return storage.loadProject(JSON.parse(localStorage.getItem("Projects"))[0]);
  }
})();

if (storage.loadTodos(defaultProject.id) < 1) {
  populateTodos();
  populateProjects();
}

console.log(storage.loadProjects());
console.log(storage.loadTodos(defaultProject.id));

export { defaultProject };
