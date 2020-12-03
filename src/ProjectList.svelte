<script>
  import {
    currentView
  } from './Store.js';
  /*import ProjectList from './ProjectList.svelte';*/
  import NewProject from './NewProject.svelte';
  import Chronometer from './Chronometer.svelte';

  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
  let simpleSelected = false;

  //import EditProject from './editProjectOpcion1.svelte';
  //import Task from './task.svelte';

  async function newProject() {
    $currentView = 'NewProject';
  }

  import {
    tasks
  } from './Store.js';
  import Card from '@smui/card';
  import Button, {
    Label
  } from '@smui/button';


  let crono = {
    iniciar: false
  };

  function toggle() {
    crono.iniciar = !crono.iniciar;
  }
</script>
<section style="padding-left: 26px!important;padding-right: 26px!important;">
  <h2 class="tittle_PanelProject">TaskTracker</h2>
  <p class="subtit_PanelProject">Tú actividad</p>

  <div class="card-container short">

  </div>
  <!--Boton para limpiar LocalStorage-->
  <button on:click="{()=>{localStorage.clear()}}">Limpiar</button>

  {#each $tasks as task}
  <div class="card-container short">
   <Card style="width: 100%;" variant="outlined" padded class="cardproject">
  
   <div class="row" style="margin-bottom:0px;">
     <div class="col s6 cardTask">
       <div class="col s12 tareas wrapper">
         <p class="descripcion">
           <span>{task.name}</span>
         </p>
       </div>
       <div class="col s12 proyectos">
         <p class="etiquetas">{task.tags}</p>
         <p class="txtProyectos">{task.project}</p>
       </div>
     </div>
     <div class="col s2 cardDatos">
       <div class="col s12">
         <p class="task_rate_text">{task.rate}</p>
       </div>
       <div class="col s12">
        <Chronometer/>
       </div>
     </div>
     <div class="col s3 botonPlay right">    
      <p class="tiempoCard">
        {#if crono.iniciar}
          <button class="boton-chrono" on:click={toggle}>
            <img src="./img/icon_pause.png" alt="">
          </button>
        {:else}
	        <button class="boton-chrono" on:click={toggle}>
            <img src="./img/icon_play.png" alt="">
          </button>
        {/if}
       </p>     
    </div>
   </div>
   </Card>
  </div>
  {:else}
  <p>No hay nada en proyectos...</p>
  
  {/each}

<!-- 
<button class="create-project-button" on:click={newProject}>Añadir Proyecto</button>
-->

<nav class="btnCreateTask" style="left: 0px;right: 0px;">
  <Button style="width:100%" on:click={newProject} variant="raised"><Label>AÑADIR PROYECTO</Label></Button>
</nav>

</section>