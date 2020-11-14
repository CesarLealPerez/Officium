<script>
    import { currentView } from './draftStore.js';
    import ProjectList from './ProjectList.svelte';
    import NewProject from './NewProject.svelte';

    const views = {
        'ProjectList': ProjectList,
        'NewProject': NewProject,
    }

    $currentView = 'ProjectList'; // Sets starting component.


</script>

<section id="drafts">
    <svelte:component this={views[$currentView]}/>
    <button on:click={()=>{$currentView='NewProject'}}>NewProjectButton</button>
</section>

<style>
    button {
        positon: fixed;
        bottom: 2em;
        left: 2em;
        background-color: darkseagreen;
    }
</style>