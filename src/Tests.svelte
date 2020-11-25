<script>
// Inicio Prueba Nuevo proyecto
import NewProject from './NewProject.svelte';
// Fin prueba Nuevo proyecto

//Inicio TaskTacker
import TaskTracker from './TaskTracker.svelte';
//Fin TaskTacker


import Principal from './principal.svelte';

</script>

<section class="test">
  <h2>Test Principal</h2>
  <Principal/>
</section>

<section class="test">
  <h2>Test NewProject</h2>
  <NewProject/>
</section>


<section class="test">
  <TaskTracker/>
</section>

<style>
  .test{
    border-style: solid;
    margin: 30px;
    padding: 30px;
  }
</style>
