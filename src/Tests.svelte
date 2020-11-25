<script>


// Inicio prueba Menu
//import App from './App.svelte';
//import PanelMenu from './panelMenu.svelte';
//import PanelPrincipal from './panelPrincipal.svelte';
//var entramenu = false;
// Fin prueba Menu
  
  // Inicio Prueba Nuevo proyecto
  import NewProject from './NewProject.svelte';
  import Principal from './principal.svelte';
  import Chronometer from './Chronometer.svelte';

  // Fin prueba Nuevo proyecto
  



// Inicio prueba Store
import { currentView, currentRate, tasks } from './store.js';
// Fin prueba Store


// Inicio Prueba Nuevo proyecto
import NewProject from './NewProject.svelte';
// Fin prueba Nuevo proyecto



//Inicio TaskTacker
import TaskTracker from './TaskTracker.svelte';
//Fin TaskTacker

//Inicio Principal
import Principal from './principal.svelte';
//Fin Principal
  
</script>

<section class="test">
  <Principal/>
</section>

<!-- 
<section class="test">

<h2>Store</h2>
<p>currentView: {$currentView}</p> <button on:click={()=>$currentView="tested"}>test</button>
<p>currentRate: {$currentRate}</p> <button on:click={()=>$currentRate=9999}>test</button>
<p>projects:</p>
{#each  $tasks as project}
<p>{project}</p>
{:else}
<p>No hay nada en proyectos...</p>
{/each}
<button on:click={()=>{$tasks.push('test');$tasks=$tasks}}>test</button>
<h3>Store end</h3>

<h2> ---- End!! ---- </h2>
</section>

<section class="test">
  <h2>NewProject</h2>
  <NewProject/>
</section>
-->




<section class="test">
  <TaskTracker/>
</section>



<section class="test">
  <h2>Test Chronometer</h2>
  <Chronometer/>
</section>

<style>
  .test{
    border-style: solid;
    margin: 30px;
    padding: 30px;
  }

</style>
