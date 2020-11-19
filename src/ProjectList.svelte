<script>
	import WorkingTask from './WorkingTask.svelte';
	import { currentView, tasks } from './store.js';
    
    function goToProjects() {
        $currentView = 'NewProject';
}
function del(){
    tasks = [];
}

</script>

<svelte:head>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
</svelte:head>

<div>
    {#each $tasks as item}
        <WorkingTask bind:item/>
    {:else}
        <h2>Empieza por crear un proyecto.</h2>
    {/each}

    <button on:click={goToProjects}><i class="fas">Crear Tarea</i></button>
    <button on:click={del}>Borrar</button>
</div>