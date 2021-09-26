//Task information to Add
const btn_addTask = document.querySelector("#btn_addTask"),
    input_title = document.querySelector("#inputTitle"),
    input_text = document.querySelector("#inputText");

btn_addTask.addEventListener("click", (e) => {
    const title = input_title.value,
        text = input_text.value,
        priority = document.querySelector("input[name=priorityRadios]:checked").value;

    const task = new Task(title, text, false, priority);
    tasks.push(task);
    updateStorageTasks(tasks);
});