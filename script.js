let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputtext = document.getElementById('inputtext');
let clearToDo = document.getElementById('clearToDo');



addToDoButton.addEventListener('click',function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-style');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputtext.value;
    inputtext.value = "";

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through'
    })
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })
    clearToDo.addEventListener('click',function(){
        paragraph.remove()
    })

})