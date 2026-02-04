import Todo from "../objects/Todo.js";

const todo1 = new Todo("Play chess", "Play best of 3", "2026-02-04", "medium");
const todo2 = new Todo("Exercise", "100 Pushups", "2026-02-15", "high");
const todo3 = new Todo(
  "Buy Groceries",
  "Eggs and mayo",
  "2026-02-15",
  "medium",
);
const todo4 = new Todo(
  "Study Japanese",
  "Study Minna no Nihongo 1",
  "2026-02-28",
  "low",
);
const todo5 = new Todo(
  "Study Programming",
  "Complete TOP",
  "2026-03-31",
  "high",
);

const todos = [todo1, todo2, todo3, todo4, todo5];

export { todos };
