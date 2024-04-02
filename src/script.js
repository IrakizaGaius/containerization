function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');
  
  if (taskInput.value !== '') {
    var li = document.createElement('li');
    var taskText = document.createTextNode(taskInput.value);
    li.appendChild(taskText);
    
    var completeButton = document.createElement('button');
    completeButton.appendChild(document.createTextNode('Completed'));
    completeButton.onclick = function() {
      li.classList.toggle('completed');
      updateLocalStorage(); // Update local storage when task status changes
    };
    
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.onclick = function() {
      taskList.removeChild(li);
      updateLocalStorage(); // Update local storage when task is deleted
    };
    
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = '';

    // Store the task in local storage
    updateLocalStorage();
  }
}

// Function to update local storage with the current tasks
function updateLocalStorage() {
  var tasks = [];
  var taskList = document.getElementById('taskList').getElementsByTagName('li');
  for (var i = 0; i < taskList.length; i++) {
    tasks.push(taskList[i].innerText.split('CompletedDelete')[0]); // Store only the task text
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from local storage when the page loads
window.onload = function() {
  var storedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (storedTasks) {
    var taskList = document.getElementById('taskList');
    storedTasks.forEach(function(task) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(task));
      
      var completeButton = document.createElement('button');
      completeButton.appendChild(document.createTextNode('Completed'));
      completeButton.onclick = function() {
        li.classList.toggle('completed');
        updateLocalStorage(); // Update local storage when task status changes
      };
      
      var deleteButton = document.createElement('button');
      deleteButton.appendChild(document.createTextNode('Delete'));
      deleteButton.onclick = function() {
        taskList.removeChild(li);
        updateLocalStorage(); // Update local storage when task is deleted
      };
      
      li.appendChild(completeButton);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    });
  }
};
