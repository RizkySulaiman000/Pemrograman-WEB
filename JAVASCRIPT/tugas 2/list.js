document.addEventListener("DOMContentLoaded", function() {
    const activityInput = document.getElementById("activity");
    const addButton = document.getElementById("add-button");
    const activityList = document.getElementById("activity-list");

    addButton.addEventListener("click", function() {
        const activityText = activityInput.value.trim(); 
        if (activityText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${activityText}</span>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;
            activityList.appendChild(li);
            activityInput.value = ""; 
        }
    });

    activityList.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("edit-button")) {
            const listItem = target.parentElement;
            const span = listItem.querySelector("span");
            const newText = prompt("Edit activity:", span.textContent);
            if (newText !== null) {
                span.textContent = newText;
            }
        } else if (target.classList.contains("delete-button")) {
            const listItem = target.parentElement;
            listItem.remove();
        }
    });
});



