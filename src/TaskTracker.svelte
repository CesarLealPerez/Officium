<script>
    import { tasks } from './Store.js';
    import Project from './Project.svelte';
    import NewProject from './NewProject.svelte';
    console.log($tasks)
    //Cambiar "./Project.svelte" por modulo del proyecto

</script>

<div>
    <h2>TaskTracker</h2>
    
    {#each $tasks as item}    
        <Project/> <!--Cambiar por la pagina respectiva-->   
    {:else}
        <NewProject/>
    {/each}
</div>