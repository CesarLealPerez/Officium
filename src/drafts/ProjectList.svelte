<script>
	import { currentView } from './../store.js';
    import { projects } from './draftStore.js';
    import Project from './Project.svelte';
</script>

<div>
    {#each $projects as item}
        <Project bind:item/>
    {:else}
        <p>Empieza por crear un proyecto.</p>
    {/each}
</div>