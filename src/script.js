{
    let iniciar = function () {
        const btnAnadir = document.getElementById("button-addon2");
        const ulTareas = document.getElementById("listaTareas");
        const ulTareasRealizadas = document.getElementById("listaTareasRealizadas");
        const nuevaTarea = document.getElementById("nuevaTarea");

        // Creo un evento click para eliminar tareas cuando se hace clic en el botón de eliminación de una tarea 
        document.addEventListener("click", function (e) {
            if (e.target.classList.contains("btn-eliminar")) {
                eliminarTarea(e.target.parentNode);
            }
        });

        // Creo un evento change para mover tareas completadas a la lista de tareas realizadas
        document.addEventListener("change", function (e) {
            const tarea = e.target.parentNode;

            if (e.target.type === "checkbox") {
                if (e.target.checked) {
                    moverTareaRealizada(tarea);
                } else {
                    moverTarea(tarea);
                }
            }
        });

        btnAnadir.addEventListener("click", anade);
    }

    function anade() {
        const nuevaTarea = document.getElementById("nuevaTarea");
        const texto = nuevaTarea.value;
        const ulTareas = document.getElementById("listaTareas");

        if (texto !== "") {
            const elemento = document.createElement("li");
            //Este nombre dado a la clase es para el diseño de Bootstrap
            elemento.className = "list-group-item";
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

            ulTareas.appendChild(elemento);
            // Pongo en blanco el input de añadir tareas
            nuevaTarea.value = "";
            const btnEliminar = document.createElement("button");
            //Este nombre dado a la clase es para el diseño de Bootstrap
            btnEliminar.className = "btn btn-danger btn-eliminar float-end";
            btnEliminar.textContent = "Eliminar";
            elemento.appendChild(btnEliminar);

            ul.appendChild(elemento);
            // Pongo en blanco el input de añadir tareas
            nuevaTarea.value = "";
        } else {
            alert("No se ha introducido ninguna tarea.");
        }
    }

    // Creo la funcion eliminar tarea
    function eliminarTarea(tarea) {
        const ulTareas = document.getElementById("listaTareas");
        const ulTareasRealizadas = document.getElementById("listaTareasRealizadas");

        if (ulTareas.contains(tarea)) {
            ulTareas.removeChild(tarea);
        } else if (ulTareasRealizadas.contains(tarea)) {
            ulTareasRealizadas.removeChild(tarea);
        }
    }

    // Creo la función mover tarea a la lista de tareas hechas
    function moverTareaRealizada(tarea) {
        const ulTareasRealizadas = document.getElementById("listaTareasRealizadas");
        ulTareasRealizadas.appendChild(tarea);
    }

    // Creo la función mover tarea de la lista de tareas hechas a la lista de tareas
    function moverTarea(tarea) {
        const ulTareas = document.getElementById("listaTareas");
        ulTareas.appendChild(tarea);
    }

    document.addEventListener("DOMContentLoaded", iniciar);
}