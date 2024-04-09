// the function checks whether the user has entered any text in the input field. 
//If the input field is empty, it alerts the user to enter a task and stops further execution of the function
function addTask() { 
    var taskInput = document.getElementById("taskInput"); // This input element is where the user can type in a new task.
    var taskList = document.getElementById("taskList"); // This is the list where we will display the tasks.


    //  If the input field is empty (meaning the user hasn't entered any text), the condition inside the if statement is true.
    if (taskInput.value === "") {
        alert("Please enter a task"); // If the input field is empty, this line displays an alert dialog box with the message "Please enter a task"
        return;
    }

    // displaying the task text within the todo list
    var li = document.createElement("li");
    li.textContent = taskInput.value;

    // Adding update button
    // its a prompt 
    var updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.onclick = function() {
        var newText = prompt("Enter updated task", li.textContent);
        if (newText !== null && newText !== "") {
            li.textContent = newText;
        }
    };

    // Adding a delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    // Adding edit button
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
        var editedText = prompt("Edit task", li.textContent);
        if (editedText !== null && editedText !== "") {
            li.textContent = editedText;
        }
    };


    // creating a an "Update, edit, delete" button is added alongside the task text within a list item (<li>)
    li.appendChild(updateButton); // This line appends the updateButton element (which represents the "Update" button) as a child of the li element
    li.appendChild(editButton); // This line appends the editButton element (which represents the "Edit" button) as a child of the li element
    li.appendChild(deleteButton); // This line appends the deleteButton element (which represents the "Delete" button) as a child of the li element

    taskList.appendChild(li);  // This effectively adds the entire task item (task text along with "Update", "Edit", and "Delete" buttons) to the todo list displayed on the webpage.

    // Clearing input field after adding task
    taskInput.value = "";
}





















