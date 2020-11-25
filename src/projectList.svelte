<script>
    import { currentView } from './store.js';
      import ProjectList from './projectList.svelte';
      import NewProject from './NewProject.svelte';
      //import EditProject from './editProjectOpcion1.svelte';
      //import Task from './task.svelte';

      async function newProject(){
      $currentView = 'NewProject';
    }

      
</script>
<p>ProjectList</p>
<button class="create-project-button" on:click={newProject}>Añadir Proyecto</button>
