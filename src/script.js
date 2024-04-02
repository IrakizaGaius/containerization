function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');
  
  if (taskInput.value !== '') {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.value));
    
    var completeButton = document.createElement('button');
    completeButton.appendChild(document.createTextNode('Completed'));
    completeButton.onclick = function() {
      li.classList.toggle('completed');
    };
    
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.onclick = function() {
      taskList.removeChild(li);
    };
    
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = '';
  }
}
