<script>
    import { projects, currentView } from './store.js';
    
var projectName= '';

function createProject() {
    const newProject = {
        name: projectName,
        task: [],
    }
    $projects.push(newProject)
    cleanInput();
    goToProjects();
}

/*function createProject() { 
    $projects = [
        {
            name: projectName,
            rate: float,
            tasks: [
                {
                    start: timestamp,
                    end: timestamp
                }
            ],
            live: false
        }
    ]
    cleanInput();
    goToProjects();
}*/

function cleanInput() {
		projectName = '';
    }
    

    function goToProjects() {
        $currentView = 'ProjectList';
    }


</script>

<button on:click={goToProjects}>&lt;</button>
<div class="create-project-container">
<label id="name">Crea tu proyecto</label>
    <!--input id="taskName" type="text" placeholder="Nombre la tarea"-->
    <input id="projectName" type="text" placeholder="Nombre del proyecto" required bind:value={projectName}>
    <!--input id="tags" type="text" placeholder="# Etiquetas"-->
    <!--input id="rate" type="text" placeholder="Tarifa"-->
    <button class="create-project-button" on:click={createProject}>Crear</button>
</div>

<style>

</style>