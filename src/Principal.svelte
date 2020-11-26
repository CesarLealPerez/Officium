<script>
  import { currentView } from './Store.js';
    import ProjectList from './ProjectList.svelte';
    import NewProject from './NewProject.svelte';
    //import EditProject from './editProjectOpcion1.svelte';
    //import Task from './task.svelte';
    
  
    async function newProject(){
      $currentView = 'NewProject';
    }
  //lista de vistas posibles partiendo de aqui
  const views = {
    'ProjectList' : ProjectList,
    'NewProject' : NewProject,
    //'EditProject' : EditProject,
    //'Task' : Task,
  }

  //vista inicial almacenada
  $currentView = 'ProjectList'; //CAMBIAR POR ProjectList QUE CONTIENE A NewProject

</script>

<section id="drafts">
  <svelte:component this={views[$currentView]}/>
</section>



<style>
    section {       
        bottom: 2em;
        left: 2em;    
    }    
</style>
