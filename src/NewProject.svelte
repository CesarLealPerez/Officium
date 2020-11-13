<script>
    import { projects, currentView } from './store.js';
    
var projectName= '';

function createProject() { 
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
}

function cleanInput() {
		projectName = '';
    }
    

    function goToProjects() {
        $currentView = 'panelPrincipal';
    }


</script>

<div class="create-project-container">
<label id="name">Crea tu proyecto</label>
    <!--input id="taskName" type="text" placeholder="Nombre la tarea"-->
    <input id="projectName" type="text" placeholder="Nombre del proyecto">
    <!--input id="tags" type="text" placeholder="# Etiquetas"-->
    <!--input id="rate" type="text" placeholder="Tarifa"-->
    <button class="create-project-button" on:click={createProject}>Crear</button>
</div>

<style>

</style>