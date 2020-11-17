<script>
    import { tasks } from './store.js';
    import Project from './Project.svelte';
    import NewProject from './NewProject.svelte';
    //Cambiar "./Project.svelte" por modulo del proyecto

</script>

<div>
    
    {#each $tasks as item}    
        <Project/>    
    {:else}
        <NewProject/>
    {/each}
</div>