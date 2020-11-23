<script>

  // Inicio prueba Store
  
  import { tasks } from './store.js';
  import Card from '@smui/card';
  import Button, {Label} from '@smui/button';


// Router
  import {link} from 'svelte-spa-router'

  
// Inicio prueba Menu
//import App from './App.svelte';
//import PanelMenu from './panelMenu.svelte';
//import PanelPrincipal from './panelPrincipal.svelte';
//var entramenu = false;
// Fin prueba Menu

// Inicio Prueba Nuevo proyecto
//import NewProject from './NewProject.svelte';
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
<section style="padding-left: 26px!important;padding-right: 26px!important;">
  <h2 class="tittle_PanelProject">TaskTracker</h2>
  <p class="subtit_PanelProject">Tú actividad</p>

  <div class="card-container short">

</div>

{#each $tasks as task}
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

<nav class="btnCreateTask" style="left: 0px;right: 0px;">
 <Button style="width:100%" on:click={()=>{$tasks.push('test');$tasks=$tasks}} variant="raised"><Label>AÑADIR PROYECTO</Label></Button>
</nav>


</section>

<!-- 
<section class="test">
  <h2>NewProject</h2>
  <NewProject/>
</section>
-->
<style>
  .test{
    border-style: solid;
    margin: 30px;
    padding: 30px;
  }

</style>
