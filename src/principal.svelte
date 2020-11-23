<script>
  import { currentView } from './store.js';
    import ProjectList from './projectList.svelte';
    import NewProject from './newProject.svelte';
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
    'Menu' : Menu,
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
