<script>
  // Inicio prueba Menu
  import PanelMenu from './Componentes/PanelMenu.svelte';
  import PanelPrincipal from './Componentes/PanelPrincipal.svelte';
  var entramenu = false;
  // Fin prueba Menu

  // Inicio prueba Store
  import {
    currentView,
    currentRate,
    projects
  } from './store.js';
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
<section style="padding-left: 26px!important;padding-right: 0px!important;">
  <h2 class="tittle_PanelProject">TaskTracker</h2>
  <p class="subtit_PanelProject">Tú actividad</p>

  <div class="card-container short">

  </div>

  <!-- 

 <p>currentView: {$currentView}</p> <button on:click={()=>$currentView="tested"}>test</button>
  <p>currentRate: {$currentRate}</p> <button on:click={()=>$currentRate=9999}>test</button>
  <p>projects:</p>
  {#each  $projects as project}
  <Card style="width: 100%;background:#1A1824;border:0px;" variant="outlined" padded>
    <div class="col s12">
      <div class="col s9">
        <p>{project}</p>
      </div>
      <div class="col s3">
      </div>
    </div>
  </Card>
  {:else}
  <p>No hay nada en proyectos...</p>
  {/each}
  <button on:click={()=>{$projects.push('test');$projects=$projects}}>test</button>
  <h3>Store end</h3>

   -->

  {#each $projects as project}
   <div class="card-container short">
    <Card style="width: 100%;" variant="outlined" padded class="cardproject">

    <div class="row" style="margin-bottom:0px;">
      <div class="col s6 cardTask">
        <div class="col s12 tareas wrapper">
          <p class="descripcion">
            <span>Landing para CocaCola.</span>
          </p>
        </div>
        <div class="col s12 proyectos">
          <p class="etiquetas">#Desarrollo web</p>
          <p class="txtProyectos">@CocaCola</p>
        </div>
      </div>
      <div class="col s4 cardDatos">
        <div class="col s12">
          <p>€58.00</p>
        </div>
        <div class="col s12">
          <p class="tiempoCard">00:48:21</p>
        </div>
      </div>
      <div class="col s2 botonPlay">         
        <a href="#"><img class="botonPlayImg" src="img/icon_small_arrow_right.png" alt="BotonPlay"></a>
      </div>
    </div>
    </Card>
  </div>
   {:else}
   <p>No hay nada en proyectos...</p>

   {/each}

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

.tittle_PanelProject{
  font-size: 20px;
}


.subtit_PanelProject{
  font-size: 15px;

}

.tarea-txt{
  font-size: 9px;
  text-align: left;
}

</style>