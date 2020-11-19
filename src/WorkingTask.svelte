<script>
import { currentView, tasks } from './store.js';
function goToProjects() {
    $currentView = 'ProjectList';
}


</script>

<main>
    {#each $tasks as item}
    <h2>Tarea: (item.name)</h2>
    <h2>Proyecto: (item.projectName)</h2>
    <h3>item.tags[]</h3>
    <h3>item.rate</h3>
    <h1>Tiempo empleado:</h1>
    {/each}
</main>

<style>

</style>