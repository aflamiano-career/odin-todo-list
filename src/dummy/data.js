import storage from "../controllers/storageController.js";

import { Todo } from "../objects/Todo.js";
import { Project } from "../objects/Project.js";
import { defaultProject } from "../utils/init.js";

function populateTodos() {
  storage.saveTodo(
    new Todo(
      "Play chess",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, recusandae?",
      "2026-02-04",
      "2",
    ),
    defaultProject.id,
  );

  storage.saveTodo(
    new Todo(
      "Exercise",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates doloribus perspiciatis vitae esse eos deleniti.",
      "2026-02-15",
      "3",
    ),
    defaultProject.id,
  );
  storage.saveTodo(
    new Todo(
      "Buy Groceries",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusantium! Rem deleniti aliquid vel, cum esse natus doloribus ipsum cumque.",
      "2026-02-15",
      "2",
    ),
    defaultProject.id,
  );
}

function populateProjects() {
  const project = new Project("Studies");
  storage.saveProject(project);
  storage.saveTodo(
    new Todo(
      "Study Japanese",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo aliquid nobis nam officia reprehenderit tempore doloremque dolore quae delectus sed dolores eaque laborum maiores aut, iure eius soluta debitis amet.",
      "2026-02-04",
      "1",
    ),
    project.id,
  );
  storage.saveTodo(
    new Todo(
      "Study Programming",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut corporis deserunt voluptatem blanditiis, dicta quasi deleniti tempora aliquid saepe inventore dolor. Voluptatibus, quos mollitia.",
      "2026-02-04",
      "3",
    ),
    project.id,
  );
}

export { populateTodos, populateProjects };
