document.addEventListener("DOMContentLoaded",function(){
    const todoForm = document.getElementById("ToDoForm");
    const todoInput = document.getElementById("ToDoInput");
    const todoContainer = document.getElementById("ToDoContainer");

    todoForm.addEventListener("submit",function(event){
        event.preventDefault(); //prevenir que recargue la página

        const todoText = todoInput.value.trim(); //obtener texto del input

        if(todoText !== ""){
            const todoCheckBox = document.createElement("input");
            todoCheckBox.type = "checkbox";
            todoCheckBox.classList.add("ToDoItemCheckbox"); //crea una clase para los estilos

            const todoLabel = document.createElement("label");
            todoLabel.textContent = todoText;
            todoLabel.classList.add("ToDoItemLabel");

            const todoDelete = document.createElement("button");
            todoDelete.textContent = "X";
            todoDelete.classList.add("ToDoItemDelete");

            todoDelete.addEventListener("click",function(){
                todoContainer.removeChild(todoWrapper);
            });

            const todoWrapper = document.createElement("div");
            todoWrapper.classList.add("ToDoItemWrapper");
            todoWrapper.appendChild(todoCheckBox); //agregar el checkbox al contenedor
            todoWrapper.appendChild(todoLabel); //agregar el label al contenedor
            todoWrapper.appendChild(todoDelete); //agregar boton para eliminar al contenedor

            todoContainer.appendChild(todoWrapper); //agregar el contenedor a la página

            todoInput.value = ""; //limpiar el input para agregar una nueva tarea
        } else{
            alert("Digite una tarea para agregar a la lista!"); //mensaje si da clic con el input vacio
        }
    });

    todoContainer.addEventListener("change",function(){
        const checkbox = event.target;
        const label = checkbox.nextElementSibling;
        if(checkbox.checked){
            label.style.textDecoration = "line-through";
            label.style.fontWeight = "bold";
        } else{
            label.style.textDecoration = "none";
            label.style.fontWeight = "normal";
        }
    });
});