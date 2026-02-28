document.addEventListener("DOMContentLoaded", () => {
  const $taskInput = document.getElementById("task-input");
  const $taskList = document.getElementById("task-list");
  const $addTaskBtn = document.getElementById("add-task-btn");

  const $emptyImage = document.querySelector(".empty-image");

  const toggleEmptyImage = () => {
    if ($taskList.children.length === 0) {
      $emptyImage.style.display = "block";
    } else {
      $emptyImage.style.display = "none";
    }
  };

  const addTask = (event) => {
    event.preventDefault();
    const taskText = $taskInput.value.trim();

    if (!taskText) {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement("li");

    li.innerHTML = `<input type="checkbox" class="checkbox">
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>`;

    $taskList.appendChild(li);
    $taskInput.value = "";

    toggleEmptyImage();
  };

  $addTaskBtn.addEventListener("click", addTask);

  $taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask(event);
    }
  });
});
