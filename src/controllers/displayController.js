import { Todo } from "../objects/Todo.js";

import storage from "./storageController.js";
import data from "./dataController.js";

export default class DisplayController {
  // Render: Input Object
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

  // Render: Select Object
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

  // Render: Form Object
  static renderForm(formClass, headerText, submitHandler, elements) {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.classList.add(formClass);
    const formHeader = document.createElement("h2");
    formHeader.textContent = headerText;
    form.appendChild(formHeader);

    const formList = document.createElement("ul");
    form.appendChild(formList);

    elements.map((input) => {
      formList.appendChild(input);
    });

    const btnSave = document.createElement("button");
    btnSave.setAttribute("type", "submit");
    btnSave.textContent = "Save";
    form.appendChild(btnSave);

    btnSave.addEventListener("click", submitHandler);
    return form;
  }

  // Render: Todo Card
  static renderTodo(todo) {
    const card = document.createElement("div");
    card.setAttribute("data-id", todo.id);
    card.classList.add("card");
    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("type", "button");
    btnDelete.textContent = "X";
    const title = document.createElement("h2");
    title.textContent = todo.title;
    const desc = document.createElement("p");
    desc.textContent = todo.desc;
    const date = document.createElement("p");
    date.textContent = todo.dueDate;

    const priority = `priority--${Todo.priorities[todo.priority].toLowerCase()}`;

    card.classList.add(priority);
    card.appendChild(btnDelete);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(date);

    btnDelete.addEventListener("click", data.handleTodoCard);

    return card;
  }

  // Render: Todo List
  static renderTodoList(projectId) {
    const todos = storage.loadTodos(projectId);
    const todoList = document.createElement("ul");
    todoList.setAttribute("data-id", projectId);
    todos.forEach((todo) =>
      todoList.appendChild(DisplayController.renderTodo(todo)),
    );
    return todoList;
  }

  // Render: Project Section
  static renderProject(project) {
    const column = document.createElement("section");
    const projectName = document.createElement("h2");
    projectName.textContent = project.name;
    column.appendChild(projectName);
    column.appendChild(DisplayController.renderTodoList(project.id));
    return column;
  }

  // Render: Project List
  static renderProjectList() {
    const projects = storage.loadProjects();
    const projectList = document.createElement("ul");
    projects.forEach((project) => {
      projectList.appendChild(DisplayController.renderProject(project));
    });
    return projectList;
  }
}
