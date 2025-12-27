
let students = JSON.parse(localStorage.getItem('studentList')) || [];

// Khi mở web lên, gọi hàm này để vẽ lại danh sách cũ (nếu có)
renderStudents();

function addStudent() {

    let nameInput = document.getElementById("nameInput");
    let scoreInput = document.getElementById("scoreInput");
    let name = nameInput.value;
    let score = parseFloat(scoreInput.value);

    if (name.trim() === "" || scoreInput.value === "") {
        alert("Vui lòng nhập đầy đủ tên và điểm!");
        return;
    }
    if (score < 0 || score > 10) {
        alert("Điểm phải từ 0 đến 10!");
        return;
    }

    // 2. Thêm vào Mảng dữ liệu (Thay vì thêm thẳng vào HTML)
    let newStudent = {
        name: name,
        score: score
    };
    students.push(newStudent);

    // 3. Lưu vào bộ nhớ trình duyệt
    saveData();

    // 4. Vẽ lại giao diện
    renderStudents();

    // Reset ô nhập
    nameInput.value = "";
    scoreInput.value = "";

}

// Hàm vẽ lại danh sách từ dữ liệu (Đây là bước liên kết chặt chẽ nhất)
function renderStudents() {
    let listElement = document.getElementById("student-list");
    listElement.innerHTML = ""; // Xóa sạch danh sách cũ trên màn hình để vẽ lại từ đầu

    // Duyệt qua từng sinh viên trong mảng students
    students.forEach((student, index) => {
        let li = document.createElement("li");
        li.className = "student-item";

        // Logic màu sắc
        if (student.score >= 5) {
            li.classList.add("text-green");
        } else {
            li.classList.add("text-red");
        }

        li.innerHTML = `<span>${student.name}</span> <span>${student.score}</span>`;

        // Sự kiện xóa
        li.onclick = function() {
            removeStudent(index);
        };

        listElement.appendChild(li);
    });
}

// Hàm xóa sinh viên
function removeStudent(index) {
    // Xóa 1 phần tử tại vị trí index trong mảng
    students.splice(index, 1);
    
    // Cập nhật lại bộ nhớ và giao diện
    saveData();
    renderStudents();
}

// Hàm lưu dữ liệu vào LocalStorage
function saveData() {
    localStorage.setItem('studentList', JSON.stringify(students));
}