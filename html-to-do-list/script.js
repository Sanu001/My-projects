const form = document.getElementById('todo-form'); 
const input = document.getElementById('todo-input'); 
const list = document.getElementById('todo-list'); 
 
form.addEventListener('submit', function(e) { 
  e.preventDefault(); 
  const taskText = input.value.trim(); 
  if (taskText === '') return; 
 
  const li = document.createElement('li'); 
  li.textContent = taskText; 
 
  const deleteBtn = document.createElement('button'); 
  deleteBtn.textContent = ' '; 
  deleteBtn.style.background = 'none'; 
  deleteBtn.style.border = 'none'; 
  deleteBtn.style.cursor = 'pointer'; 
  deleteBtn.style.fontSize = '16px'; 
 
  deleteBtn.addEventListener('click', () => { 
    li.remove(); 
  }); 
 
  li.addEventListener('click', () => { 
    li.classList.toggle('completed'); 
  }); 
  li.appendChild(deleteBtn); 
  list.appendChild(li); 
  input.value = '';});