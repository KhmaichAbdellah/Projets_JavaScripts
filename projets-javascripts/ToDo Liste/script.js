const taskInput = document.getElementById('taskInput');
const addBtn    = document.getElementById('addBtn');
const taskList  = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.textContent = text;

  // Boutons terminer et supprimer
  const doneBtn = document.createElement('button');
  doneBtn.textContent = '✓'; doneBtn.className = 'task-btn';
  doneBtn.addEventListener('click', () => li.classList.toggle('completed'));

  const delBtn = document.createElement('button');
  delBtn.textContent = '✕'; delBtn.className = 'task-btn';
  delBtn.addEventListener('click', () => li.remove());

  li.append(doneBtn, delBtn);
  taskList.appendChild(li);
  taskInput.value = '';
});
