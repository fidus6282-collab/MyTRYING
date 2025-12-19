let input = document.querySelector('.input');
let sendBtn = document.querySelector('.send');
let list = document.querySelector('.list');
let toggleBtn = document.querySelector('.toggle');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let container = document.querySelector('.container');



 toggleBtn.addEventListener('click', () => {
  if (body.style.backgroundColor === "black") {
    h1.style.color = "black";
    body.style.backgroundColor = "white";
    container.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "black";
    h1.style.color = "white";
    container.style.backgroundColor = "black";
  }
});

sendBtn.addEventListener('click', () => {
  let noteText = input.value;
  if (noteText.trim() !== '') {
    let li = document.createElement('li');
    li.className = 'note';
    li.textContent = noteText;
    list.appendChild(li);
    input.value = '';
   
    let editDelete = document.createElement('div');
    editDelete.classList.add('edit-delete');
    li.appendChild(editDelete);

    let edit = document.createElement('span');
    edit.textContent = '✏️';
    editDelete.appendChild(edit);

    let trash = document.createElement('span');
    trash.textContent = '🗑 ️';
    editDelete.appendChild(trash);

        trash.addEventListener('click', () => {
      li.remove();
    });

    edit.addEventListener('click', () => {
  li.firstChild.textContent = prompt("Yangi matn:");
});

  }})
