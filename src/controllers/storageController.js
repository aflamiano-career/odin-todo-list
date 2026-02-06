import { Project } from "../objects/Project.js";
import { Todo } from "../objects/Todo.js";

export default class StorageController {
  static saveProject(project) {
    const projectIds = JSON.parse(localStorage.getItem("Projects")) ?? [];
    if (!projectIds.includes(project.id)) {
      localStorage.setItem(
        "Projects",
        JSON.stringify([...projectIds, project.id]),
      );
    }
    localStorage.setItem(project.id, JSON.stringify(project));
  }

  static loadProject(id) {
    if (!localStorage.getItem(id)) {
      console.log(`Project with id: ${id} does not exist.`);
      return;
    }
    const jsonObj = JSON.parse(localStorage.getItem(id));
    const project = new Project(jsonObj.name);
    project.id = jsonObj._id;
    project.todos = jsonObj.todos;
    return project;
  }

  static loadProjects() {
    const projectIds = JSON.parse(localStorage.getItem("Projects")) ?? [];
    const projects = projectIds.map((id) => StorageController.loadProject(id));
    return projects;
  }

  static saveTodo(todo, projectId) {
    const project = StorageController.loadProject(projectId);
    project.addItem("todos", todo.id);
    StorageController.saveProject(project);
    localStorage.setItem(todo.id, JSON.stringify(todo));
  }

  static loadTodo(id) {
    const jsonObj = JSON.parse(localStorage.getItem(id));
    const todo = new Todo(
      jsonObj.title,
      jsonObj.desc,
      jsonObj.dueDate,
      jsonObj.priority,
    );
    todo.id = jsonObj._id;
    return todo;
  }

  static loadTodos(projectId) {
    const project = StorageController.loadProject(projectId);
    const todos = project.todos.map((id) => StorageController.loadTodo(id));
    return todos;
  }
}
