import { todoMap } from "./todoList.js";

const Output = {
  printWelcome() {
    console.log("소프티어 부트캠프 5기 투두리스트입니다!");
  },

  printTodos() {
    const size = todoMap.size;
    if (size === 0) {
      console.log("투두가 존재하지 않습니다.");
      return;
    }
    Output.printLine();
    console.log("투두리스트");
    console.log("id | title");
    todoMap.forEach((todo, _) => {
      const { id, title } = todo.getTodo();
      console.log(id, "|", title);
    });
  },

  printMenu() {
    Output.printLine();
    console.log(
      `
    1. 추가
    2. 조회
    3. 수정
    4. 삭제
    q. 종료
    `.replace(/^ +/gm, "")
    );
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
