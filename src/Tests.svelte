<script>
	import ProjectList from './drafts/ProjectList.svelte';
	import { currentView } from './store.js';

  
// Inicio prueba Menu
//import App from './App.svelte';
//import PanelMenu from './panelMenu.svelte';
//import PanelPrincipal from './panelPrincipal.svelte';
//var entramenu = false;
// Fin prueba Menu

// Inicio Prueba Nuevo proyecto
import NewProject from './NewProject.svelte';
// Fin prueba Nuevo proyecto
</script>

<!-- 
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
-->
{#if $currentView="NewProject"}
<section class="test">
  <NewProject/>
</section>
{/if}
{#if $currentView="ProjectList"}
<ProjectList/>
{/if}
<style>
  .test{
    border-style: solid;
    margin: 30px;
    padding: 30px;
  }
</style>
