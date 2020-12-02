<script>
    import { tasks, currentView } from './Store.js';

    import Button, {Label} from '@smui/button';


var taskName;
var projectName;
var tags= [];
var rate;


    function createProject() {
        const newProject = 
            {
                name: taskName,
                project: "@"+projectName,
                tags: "#"+tags,
                rate: rate+"€",
                time: 0

            }
        
        $tasks = [...$tasks, newProject];
        goToProjects();
    } 

function comprobar(){
	if (!taskName || !rate){
		alert("La tarea debe tener como minimo un nombre y una tarifa")
    }
    /*if(tasks.find(taskName.toUpperCase()) === true){
      alert("Ya existe una tarea con ese nombre")
    }*/
    else{
        createProject()
    }
}
  


    function goToProjects() {
        $currentView = 'ProjectList';

    }

</script>

<svelte:head>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
</svelte:head>

<div class="container">
    <div class="create-project-container">
        <h2 id="name">Crea tu tarea:</h2>
        <input id="taskName"  class="white-text" type="text" placeholder="Nombre la tarea" autocomplete="off" required bind:value={taskName}><br>
        <input id="projectName" class="white-text"  type="text" placeholder="@ Nombre del proyecto" autocomplete="off" required bind:value={projectName}><br>
        <input id="tags" class="white-text"  type="text" placeholder="# Etiquetas" autocomplete="off" required bind:value={tags}><br>
        <input id="rate" class="white-text"  type="number" placeholder="Tarifa" autocomplete="off" required bind:value={rate}>
     
        <select id="rate-select" name="ratelist" form="rateform">
            <option value="euro">Euro(€)</option>
            <option value="dolar">Dolar($)</option>
        </select><br>
    
        <div class="botones-crear center">
            <div class="row">
                <div class="col s6" style="padding-left: 0px!important">
                    <Button class="volver" on:click={goToProjects}><Label class="white-text">VOLVER</Label></Button>
                </div>
                <div class="col s6">
                    <Button class="create-project-button" on:click={comprobar}><Label class="white-text">CREAR</Label></Button><br>
                </div>
            </div>
        </div>
        
    
    </div>
</div>


<style>

</style>