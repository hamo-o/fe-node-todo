import Input from "./input.js";
import Output from "./output.js";
import { todoMap, setTodoMap } from "./todoList.js";

class App {
  #ACTIONS = {
    1: this.insert,
    2: this.detail,
    3: this.edit,
    4: this.delete,
  };

  async run() {
    Output.printWelcome();
    while (1) {
      Output.printTodos();
      Output.printMenu();

      const menu = await Input.readMenu();
      if (menu === "q" || menu === "Q") {
        Input.close();
        break;
      }
      await this.#ACTIONS[menu]();
    }
  }

  async insert() {
    const { title, contents } = await Input.insertTodo();
    setTodoMap({ title, contents });
  }

  async detail() {
    const id = await Input.getTodoId();
    Output.printTodoDetail(id);
  }

  async edit() {
    const id = await Input.getTodoId();
    const todo = todoMap.get(Number(id));
    const { newTitle, newContents } = await Input.editTodo(todo.getDetail());
    todo.editDetail(newTitle, newContents);
  }

  async delete() {
    const id = await Input.getTodoId();
    todoMap.delete(Number(id));
  }
}

const app = new App();

app.run();
