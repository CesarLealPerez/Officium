

<script>
    import { currentView, tasks } from './store.js';
    import Project from './project.svelte'
    import NewProject from './newProject.svelte';
    import EditProject from './editProject.svelte';
    
  const views = {
    'NewProject' : NewProject,
    'EditProject' : EditProject,
  }

</script>

<div>
    {#each $tasks as tarea}
        <Project bind:tarea/>
    {:else}
        <p>Empieza por crear un proyecto.</p>
    {/each}

    <button on:click={()=>{$currentView='NewProject'}}>Añadir Proyecto</button>
</div>

<style>
    
    button {
        
        bottom: 2em;
        left: 2em;
        background-color: darkseagreen;
    }
</style>