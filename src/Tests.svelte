<script>

import App from './App.svelte';
import PanelMenu from './panelMenu.svelte';
import PanelPrincipal from './panelPrincipal.svelte';

import { currentView, currentRate, projects } from './store.js';

var entramenu = false;

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

<h2>Store</h2>
<p>currentView: {$currentView}</p> <button on:click={()=>$currentView="tested"}>test</button>
<p>currentRate: {$currentRate}</p> <button on:click={()=>$currentRate=9999}>test</button>
<p>projects:</p>
{#each  $projects as project}
<p>{project}</p>
{:else}
<p>No hay nada en proyectos...</p>
{/each}
<button on:click={()=>{$projects.push('test');$projects=$projects}}>test</button>
<h3>Store end</h3>

<h2> ---- End!! ---- </h2>
<style>
  section.test {
    border-style: solid;
    margin: 30px;
    padding: 30px;
  }
</style>