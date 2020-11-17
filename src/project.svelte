<script>
    import {currentView, tasks, tarea1} from './store.js';
    import EditProject from './editProject.svelte';

    
    export var tarea;

    $tarea1 = tarea;

    const views = {
        'EditProject' : EditProject,
    }

/*
    const newProject = 
                {
                    name: taskName,
                    project: projectName,
                    tags: etiqueta,
                    rate: tarifa,
                    time: time,
                }
            
        */
    //console.log('LA TAREA',tarea)
</script>

<button on:click={()=>{$currentView='EditProject'}}>
    <p>{tarea[0].name}</p>
    <p>{tarea[0].project}</p>
    <p>{tarea[0].tags}</p>
    <p>{tarea[0].time}</p>

</button>


<style>
    button {
        display: block;
        background-color: darksalmon;
    }
</style>