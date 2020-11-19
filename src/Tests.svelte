<script>

import { currentView } from './store.js';
import ProjectList from './ProjectList.svelte';
import NewProject from './NewProject.svelte';

const views = {
  'ProjectList': ProjectList,
  'NewProject': NewProject,
}

$currentView = 'NewProject'; // Sets starting component.

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

<!--<section class="test">
  <NewProject/>
</section>-->

<style>
  .test{
    border-style: solid;
    margin: 30px;
    padding: 30px;
  }
</style>
