<script>

  
// Inicio prueba Menu
import PanelMenu from './Componentes/PanelMenu.svelte';
import PanelPrincipal from './Componentes/PanelPrincipal.svelte';
var entramenu = false;
// Fin prueba Menu

// Inicio prueba Store
import { currentView, currentRate, projects } from './store.js';
import Card from '@smui/card';

// Fin prueba Store

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
<section style="padding-left: 26px!important;padding-right: 26px!important;">
  <h2>TaskTracker</h2>
  <p class="subtit_PanelProject">Tú actividad</p>
<!-- 
  <div class="card-container short">
    <Card style="width: 100%;background:#1A1824;border:0px;" variant="outlined" padded>
      <p class="tarea-txt">Landing CocaCola. Desarrollo  …</p>
    </Card>
  </div>
  -->
  
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

 
</section>
<!-- 
<section class="test">
  <h2>Drafts</h2>
  <h3>Proyectos:</h3>
  <Principal/>
</section>
-->

<style>
  /*
  section.test {
    border-style: solid;
    margin: 40px;
    padding: 30px;
  }
*/

.subtit_PanelProject{
  font-size: 15px;

}

.tarea-txt{
  font-size: 9px;
  text-align: left;
}
</style>
