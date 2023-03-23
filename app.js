const addTodo = document.getElementById('add-todo');
const add = document.querySelector('.add');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
const date = document.querySelector('.date');
const modal = document.querySelector('.modal-edit');
const save = document.querySelector('.save');
const cancel = document.querySelector('.cancel');
const deleteTodo = document.querySelector('.delete');
const editTodo = document.getElementById('edit-todo');
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");

add.addEventListener("click", ()=>{
    if(addTodo.value.trim()){
        const li = document.createElement("li");
        li.innerHTML = `${addTodo.value} <span class="date">15:34:15 28.02.2023</span>
        <span class="edit">&#9998;</span> 
        <span class="close" >&#10006;</span>`
        ul.appendChild(li);
    }
    addTodo.value = ''
})

// li.forEach((e)=>{
//     e.addEventListener('click', (a)=>{
//         console.log("clicked li")
//         a.stopPropagation()
//     })
// })
ul.addEventListener('click', (e)=>{
    if(e.target.classList == 'close'){
        deleteTodo.classList.remove('hidden')
        yes.addEventListener('click', ()=>{
            e.target.parentElement.remove()
            deleteTodo.classList.add('hidden')
        })
        no.addEventListener('click', ()=>{
            deleteTodo.classList.add('hidden')
        })
    }
    else if(e.target.classList =='edit'){
        modal.classList.remove('hidden')
        cancel.addEventListener("click", ()=>{
            modal.classList.add('hidden')
            editTodo.value = '';
        })
        save.addEventListener("click", ()=>{
            if(editTodo.value.trim()){
                e.target.parentElement.innerHTML = `${editTodo.value} <span class="date">15:34:15 28.02.2023</span>
                <span class="edit">&#9998;</span> 
                <span class="close" >&#10006;</span>`
                modal.classList.add('hidden');
                editTodo.value = '';
            }
        })
    }
})
