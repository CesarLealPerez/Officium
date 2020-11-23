<script>

  
// Inicio prueba Menu
import App from './App.svelte';
import PanelMenu from './panelMenu.svelte';
import PanelPrincipal from './panelPrincipal.svelte';
var entramenu = false;
// Fin prueba Menu

<<<<<<< HEAD
// Inicio prueba Store
import { currentView, currentRate, tasks } from './store.js';
// Fin prueba Store

=======
>>>>>>> e231d158ab0f2da92dbaba104debe0aac50cfcec
// Inicio Prueba Nuevo proyecto
import NewProject from './NewProject.svelte';
// Fin prueba Nuevo proyecto


</script>

<section class="test">
  <h2>Menú</h2>
  <div>  

    {#if entramenu} 
        <PanelMenu bind:entramenu/>

    {:else}	
        <button on:click={()=>{entramenu=true}}>Menu</button>
        <PanelPrincipal bind:entramenu/>	
        
    {/if}	

  </div>
</section>

<section class="test">
<<<<<<< HEAD
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
=======
  <h2>NewProject</h2>
>>>>>>> e231d158ab0f2da92dbaba104debe0aac50cfcec
  <NewProject/>
</section>



<style>
  section.test {
    border-style: solid;
    margin: 30px;
    padding: 30px;
  }
</style>
