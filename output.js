import { todoMap } from "./todoList.js";

const Output = {
  printWelcome() {
    console.log("소프티어 부트캠프 5기 투두리스트입니다!");
    Output.printLine();
  },

  printTodos() {
    const size = todoMap.size;
    if (size === 0) {
      console.log("투두가 존재하지 않습니다.");
      return;
    }
    Output.printLine();
    console.log("투두리스트\nid | title");
    todoMap.forEach((todo, _) => {
      const { id, title } = todo.getTodo();
      console.log(id, "|", title);
    });
  },

  printMenu(menus) {
    Output.printLine();
    console.log(menus.join("\n"));
    Output.printLine();
  },

  printTodoDetail(id) {
    const todo = todoMap.get(Number(id));
    const { title, contents } = todo.getDetail();
    console.log(title, contents);
  },

  printLine() {
    console.log("-".repeat(10));
  },
};

export default Output;
