<script>
    import { tasks, currentView } from './store.js';
var taskName;
var projectName;
var tags;
var rate;


    function createProject() {
        const newProject = [
            {
                name: taskName,
                project: projectName,
                tags: [],
                rate: 0.00,
                time: 0
            }
        ]
        $tasks = [...$tasks, newProject];
        goToProjects();
    } 


    const newProject = [
        {
            name: taskName.toUpperCase(),
            project: projectName,
            tags: [],
            rate: 0.00,
            time: 0
        }
    ]
    $tasks.push(newProject)
    goToProjects();
} 

function comprobar(){
	if (!taskName || !rate){
		alert("La tarea debe tener como minimo un nombre y una tarifa")
    }
    if(tasks.find(taskName.toUpperCase()) === true){
      alert("Ya existe una tarea con ese nombre")
    }
    else{
        createProject()
    }
}
  


    function goToProjects() {
        console.log('click');

        $currentView = 'ProjectList';
}


</script>

<p>NewProject</p>
<svelte:head>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
</svelte:head>


<div class="create-project-container">
    <h2 id="name">Crea tu tarea:</h2>
    <input id="taskName" type="text" placeholder="Nombre la tarea" required bind:value={taskName}><br>
    <input id="projectName" type="text" placeholder="@ Nombre del proyecto" required bind:value={projectName}><br>
    <input id="tags" type="text" placeholder="# Etiquetas" required bind:value={tags}><br>
    <input id="rate" type="number" placeholder="Tarifa" required bind:value={rate}>
 
    <select id="rate-select" name="ratelist" form="rateform">
        <option value="euro">Euro(€)</option>
        <option value="dolar">Dolar($)</option>
    </select><br>

    <button class="create-project-button" on:click={comprobar}><i class="fas">Crear</i></button><br>
    <button on:click={goToProjects}><i class="fas fa-arrow-left">Volver a lista de tareas</i></button>

</div>

<style>

</style>