document.addEventListener('DOMContentLoaded', function() {
   
    fetchToDoList();
  
    document.getElementById('logoutLink').addEventListener('click', function() {
      logoutUser();
    });
  });
  
  function fetchToDoList() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => displayToDoList(data))
      .catch(error => console.error('Error fetching todo list:', error));
  }
  
  function displayToDoList(todoList) {
    var todoListContainer = document.getElementById('todoList');
    todoListContainer.innerHTML = '';
  
    todoList.forEach(todo => {
      todoListContainer.innerHTML += `
        <div class="mb-2">
          <input type="checkbox" id="todo-${todo.id}" onchange="handleCheckboxChange(${todo.id})">
          <span>${todo.title}</span>
        </div>`;
    });
  }
  
  function handleCheckboxChange(todoId) {
    var checkbox = document.getElementById(`todo-${todoId}`);
    var taskText = checkbox.nextElementSibling;
    
    if (checkbox.checked) {
      taskText.style.color = 'green';
      checkCompletion(); 
    } else {
      taskText.style.color = 'black';
    }
  }
  
  function checkCompletion() {
    var completedCount = 0;
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        completedCount++;
      }
    });
  
    if (completedCount >= 5) {
      showCongratsMessage(completedCount);
    }
  }
  
  function showCongratsMessage(completedCount) {
    return new Promise((resolve, reject) => {
      alert(`Congrats. ${completedCount} Tasks have been Successfully Completed`);
      resolve();
    });
  }
  
  function logoutUser() {
   
    window.location.href = 'index.html';
  }
  