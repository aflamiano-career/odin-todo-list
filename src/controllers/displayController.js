import { Todo } from "../objects/Todo.js";
import storage from "./storageController.js";

import data from "./dataController.js";

export default class DisplayController {
  static renderFormInput(id, name, text, type) {
    const listItem = document.createElement("li");
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    input.setAttribute("name", name);

    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = text;

    listItem.appendChild(label);
    listItem.appendChild(input);
    return listItem;
  }

  static renderFormSelect(id, name, text, iterable) {
    const listItem = document.createElement("li");
    const select = document.createElement("select");
    select.setAttribute("id", id);
    select.setAttribute("name", name);
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = text;
    if (Array.isArray(iterable)) {
      iterable.forEach((value) => {
        const option = document.createElement("option");
        option.setAttribute("value", value.id);
        option.textContent = value.name;
        select.appendChild(option);
      });
    } else {
      for (const [key, value] of Object.entries(iterable)) {
        const option = document.createElement("option");
        option.setAttribute("value", key);
        option.textContent = value;
        select.appendChild(option);
      }
    }
    listItem.appendChild(label);
    listItem.appendChild(select);
    return listItem;
  }

  static renderTodoForm() {
    const todoForm = document.createElement("form");
    todoForm.setAttribute("method", "post");
    todoForm.classList.add("form-todo");

    const todoFormList = document.createElement("ul");
    todoForm.appendChild(todoFormList);

    todoFormList.appendChild(
      DisplayController.renderFormInput(
        "todo-title",
        "todoTitle",
        "Title",
        "text",
      ),
    );

    todoFormList.appendChild(
      DisplayController.renderFormInput(
        "todo-desc",
        "todoDesc",
        "Description",
        "text",
      ),
    );

    todoFormList.appendChild(
      DisplayController.renderFormInput(
        "todo-date",
        "todoDate",
        "Due date",
        "date",
      ),
    );

    todoFormList.appendChild(
      DisplayController.renderFormSelect(
        "todo-prio",
        "todoPrio",
        "Priority",
        Todo.priorities,
      ),
    );

    todoFormList.appendChild(
      DisplayController.renderFormSelect(
        "todo-project",
        "todoProject",
        "Project",
        storage.loadProjects(),
      ),
    );

    const btnSave = document.createElement("button");
    btnSave.setAttribute("type", "submit");
    btnSave.textContent = "Save";
    todoForm.appendChild(btnSave);

    btnSave.addEventListener("click", data.handleSubmit);
    return todoForm;
  }

  static renderTodo(todo) {
    const card = document.createElement("div");
    card.setAttribute("data-id", todo.id);
    card.classList.add("card");
    const title = document.createElement("h2");
    title.textContent = todo.title;
    const desc = document.createElement("p");
    desc.textContent = todo.desc;
    const date = document.createElement("p");
    date.textContent = todo.dueDate;

    const priority = `priority--${Todo.priorities[todo.priority].toLowerCase()}`;

    card.classList.add(priority);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(date);

    return card;
  }

  static renderTodoList(projectId) {
    const todos = storage.loadTodos(projectId);
    const todoList = document.createElement("ul");
    todos.forEach((todo) =>
      todoList.appendChild(DisplayController.renderTodo(todo)),
    );
    return todoList;
  }

  static renderProject(project) {
    const column = document.createElement("div");
    const projectName = document.createElement("h2");
    projectName.textContent = project.name;
    column.appendChild(projectName);
    column.appendChild(DisplayController.renderTodoList(project.id));
    return column;
  }

  static renderProjectList() {
    const projects = storage.loadProjects();
    const projectList = document.createElement("ul");
    projects.forEach((project) => {
      projectList.appendChild(DisplayController.renderProject(project));
    });
    return projectList;
  }
}
