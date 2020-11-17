<script>
  import { currentView } from './store.js';
    import ProjectList from './projectList.svelte';
    import NewProject from './newProject.svelte';
    import EditProject from './editProject.svelte';
    import Menu from './menu.svelte';
    import Task from './task.svelte';
    
  //lista de vistas posibles partiendo de aqui
  const views = {
    'ProjectList' : ProjectList,
    'NewProject' : NewProject,
    'EditProject' : EditProject,
    'Menu' : Menu,
    'Task' : Task,
  }

  //vista inicial almacenada
  $currentView = 'ProjectList';

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