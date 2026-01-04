
        const nameInput = document.getElementById("nameInput");
        const scoreInput = document.getElementById("scoreInput");
        const addBtn = document.getElementById("addBtn");
        const list = document.getElementById("studentList");

        addBtn.addEventListener("click", () => {
   
            const name = nameInput.value;
            const score = parseFloat(scoreInput.value); 

         
            if (name === "" || isNaN(score) || score < 0 || score > 10) {
                alert("Vui lòng nhập tên và điểm số hợp lệ (0-10)!");
                return; 
            }

            const li = document.createElement("li");

            li.textContent = `${name} - ${score} điểm`;

            if (score >= 5) {
                li.style.color = "#4cd137"; 
            } else {
                li.style.color = "#e84118"; 
            }

            li.addEventListener("click", function() {
            
                list.removeChild(this); 
               
            });

            list.appendChild(li);

            nameInput.value = "";
            scoreInput.value = "";
            nameInput.focus(); 
        });