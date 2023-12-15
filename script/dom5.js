// Get Selectors
const todoInput = document.querySelector('#todo-input');
const todoBtn = document.querySelector('.todo-btn');
const form = document.querySelector('form');

// anchor element present in the DOM
const todoList = document.querySelector('.movie-list');
//User UI Interaction
// disabled button if input is empty
todoBtn.disabled = true;
// when user starts typing on the input field, undisable the button
todoInput.onkeyup = () => {
  if (todoInput.value.length > 0) {
    todoBtn.disabled = false;
  } else {
    todoBtn.disabled = true;
  }
};
form.onsubmit = () => {
  //prevents the form from submitting
  return false;
};
// Create to do
todoBtn.onclick = () => {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todoDiv'); //adding a class to the element
  // create li to hold todo value
  const li = document.createElement('li');
  li.classList.add('todo-item');
  li.innerHTML = todoInput.value;
  todoDiv.appendChild(li);
  //create check mark button
  const check = document.createElement('button');
  check.innerHTML = '<i class="fa fa-check"></i>';
  check.classList.add('check');
  todoDiv.appendChild(check);
  //create delete button
  const trash = document.createElement('button');
  trash.innerHTML = '<i class="fa fa-trash"></i>';
  trash.classList.add('trash');
  todoDiv.appendChild(trash);
  // anchor entire creating to an existing element in the DOM
  todoList.appendChild(todoDiv);
  //clear input field after adding a todo
  todoInput.value = '';
  //disabled submit button
  todoBtn.disabled = true;
};
//DELETING AND CHECKING EVENT AND FUNCTION ON THE UL
todoList.onclick = (e) => {
  //stores our event target in a variable
  const target = e.target;
  //DELETE
  //if the target of our event has a class equal to trash
  if (target.classList[0] === 'trash') {
    const parent = target.parentElement;
    parent.remove();
  }
  //checkmark functionality
  // find the element in the dom i am clicking on that
  //has it's first class as check.
  if (target.classList[0] === 'check') {
    //   find the parent of the element i am clicking on
    const parent = target.parentElement;
    //toggle the crossed class on my found parent
    parent.classList.toggle('crossed');
  }
};