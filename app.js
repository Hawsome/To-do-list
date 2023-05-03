const form = document.getElementById('todo-form');
const input = form.querySelector('input');
const ul = document.getElementById('todo-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = input.value.trim();
  
  if (task) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');
    
    span.textContent = task;
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    
    li.appendChild(span);
    li.appendChild(deleteButton);
    ul.appendChild(li);
    
    input.value = '';
  }
});

ul.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});