<script>
/**
 * En esta opción los cambios se guardan sólo al hacer click en el botón guardar.
 */


    import {currentView} from './store.js'

    export var item;

    const tempTask = {...item};

    async function back(){
        $currentView = 'ProjectList';
    }

    async function editProject(){
        item = tempTask;
        back();
    }

</script>

<div id="EditProject">

    <button on:click={back}>Back</button><br>

    <input required placeholder="Nombre del proyecto..." bind:value={tempTask.name}><br>
    <input required placeholder="Nombre de la tarea..." bind:value={tempTask.project}><br>
    <input required placeholder="Nombre de la etiqueta..." bind:value={tempTask.tags}><br>
    <input required placeholder="Tarifa..." bind:value={tempTask.rate}><br>
    <input required placeholder="Tiempo..." bind:value={tempTask.time}><br>

    <button on:click={editProject}>Guardar</button>

    
</div>