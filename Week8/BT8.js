const todoList = ["Hat", "Sing", "Song"];

let check = true;

while (check) {
  let choice = prompt("Nhập lựa chọn của bạn: (add, show, remove, exit)");

  switch (choice) {
    case "add":
      let add = prompt("Nhập công việc mới của bạn:");
      if (add) {
        todoList.push(add);
        alert("Đã thêm công việc!");
      }
      break;

    case "show":
      if (todoList.length === 0) {
        alert("Danh sách trống.");
      } else {
        let taskList = "Danh sách công việc:\n";
        for (let i = 0; i < todoList.length; i++) {
          taskList += (i + 1) + ". " + todoList[i] + "\n";
        }
        alert(taskList);
      }
      break;

    case "remove":
      let remove = prompt("Nhập công việc cần xóa:");
      let index = todoList.indexOf(remove);

      if (index !== -1) {
        todoList.splice(index, 1);
        alert("Đã xóa: " + remove);
      } else {
        alert("Không tìm thấy công việc cần xóa.");
      }
      break;

    case "exit":
      alert("Chương trình kết thúc. Cảm ơn bạn đã sử dụng!");
      check = false;
      break;

    default:
      alert("Lựa chọn không xác định.");
      break;
  }
}