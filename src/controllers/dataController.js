export default class DataController {
  static createTodo(inputObj) {}

  static getFormValues(form) {
    const formInputs = Array.from(form.querySelectorAll("input, select"));

    console.log(formInputs);
  }

  static handleSubmit(e) {
    if (e.target.getAttribute("type") === "submit") {
      e.preventDefault();
    }
    const inputs = Array.from(
      e.target.parentNode.querySelectorAll("input, select"),
    );

    const inputObj = inputs.reduce((acc, input) => {
      acc[input.getAttribute("name")] = input.value;
      return acc;
    }, {});

    console.log(inputs);
    console.log(inputObj);
  }
}
