//Task information to Edit
const btn_editTask = document.querySelector("#btn_editTask"),
    input_title_edit = document.querySelector("#inputTitle_edit"),
    input_text_edit = document.querySelector("#inputText_edit");


document.querySelectorAll(".btn_editTask").forEach(btn => {
    btn.addEventListener("click", () => {
        const taskId = btn.dataset.id;
        updateEditModal(taskId);
    });
});

btn_editTask.addEventListener("click", () => {
    const index = document.querySelector("#task_id_edit").value;
    const title = input_title_edit.value,
        text = input_text_edit.value,
        priority = document.querySelector("input[name=priorityRadios_edit]:checked").value;
    tasks[index].title = title;
    tasks[index].text = text;
    tasks[index].priority = priority;
    updateStorageTasks(tasks);
});

function updateEditModal(id) {
    const taskIndex = tasks.findIndex(task => task.id == id);
    document.querySelector("#task_id_edit").value = taskIndex;
    input_title_edit.value = tasks[taskIndex].title;
    input_text_edit.value = tasks[taskIndex].text;
    document.querySelector(`input[name=priorityRadios_edit][value=${tasks[taskIndex].priority}]`).checked = true;
}