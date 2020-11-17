<script>

import {tasks, currentView} from './store.js'

async function saveTask(){
    //guardo las cosas de la tarea
    $currentView='ProjectList';
}

</script>
<p>Estoy en Task</p>
<button on:click={saveTask}>Fin de Tarea</button>


