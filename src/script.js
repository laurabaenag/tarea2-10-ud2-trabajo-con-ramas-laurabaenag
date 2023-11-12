{
    let iniciar = function () {
        const btnAnadir = document.getElementById("button-addon2");
        const ul = document.getElementById("listaTareas");
        const nuevaTarea = document.getElementById("nuevaTarea");

        // Creo un evento click para eliminar tareas cuando se hace clic en el botón de eliminación de una tarea 
        ul.addEventListener("click", function (e) {
            if (e.target.classList.contains("btn-eliminar")) {
                eliminarTarea(e.target.parentNode);
            }
        })

        btnAnadir.addEventListener("click", anade);
    }

    function anade() {
        const elemento = document.createElement("li");
        //Este nombre dado a la clase es para el diseño de Bootstrap
        elemento.className = "list-group-item";
        const nuevaTarea = document.getElementById("nuevaTarea");
        const texto = nuevaTarea.value;
        const ul = document.getElementById("listaTareas");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        //Este nombre dado a la clase es para el diseño de Bootstrap
        checkbox.className = "form-check-input";
        elemento.appendChild(checkbox);

        // Creo un evento change en el checkbox para cambiar de tachado o sin tachar
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                label.style.textDecoration = "line-through";
            } else {
                label.style.textDecoration = "none";
            }
        });

        // Creo el elemento label para mostrar el texto de la tarea
        const label = document.createElement("label");
        //Este nombre dado a la clase es para el diseño de Bootstrap
        label.className = "form-check-label";
        label.textContent = texto;
        elemento.appendChild(label);

        const btnEliminar = document.createElement("button");
        //Este nombre dado a la clase es para el diseño de Bootstrap
        btnEliminar.className = "btn btn-danger btn-eliminar float-end";
        btnEliminar.textContent = "Eliminar";
        elemento.appendChild(btnEliminar);

        ul.appendChild(elemento);
        // Pongo en blanco el input de añadir tareas
        nuevaTarea.value = "";
    }

    // Creo la funcion eliminar tarea
    function eliminarTarea(tarea) {
        const ul = document.getElementById("listaTareas");
        ul.removeChild(tarea);
    }

    document.addEventListener("DOMContentLoaded", iniciar);
}