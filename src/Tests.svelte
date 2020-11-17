<script>

  
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

<section class="test">
  <h2>NewProject</h2>
  <NewProject/>
</section>

<style>
  .test{
    border-style: solid;
    margin: 30px;
    padding: 30px;
  }
</style>
