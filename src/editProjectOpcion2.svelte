<script>
/**
 * En esta opción los cambios se guardan según se cambia el formulario.
 */

    import {currentView} from './store.js'

    export var item;

    async function back(){
        $currentView = 'ProjectList';
    }

</script>

<div id="EditProject">

    <input required placeholder="Nombre del proyecto..." bind:value={item.name}><br>
    <input required placeholder="Nombre de la tarea..." bind:value={item.project}><br>
    <input required placeholder="Nombre de la etiqueta..." bind:value={item.tags}><br>
    <input required placeholder="Tarifa..." bind:value={item.rate}><br>
    <input required placeholder="Tiempo..." bind:value={item.time}><br>

    <button on:click={back}>Done</button><br>

</div>