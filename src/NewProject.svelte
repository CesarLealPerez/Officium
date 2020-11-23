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


  
    function goToProjects() {
        console.log('click');
        $currentView = 'ProjectList';
    }


</script>

<svelte:head>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
</svelte:head>

<button on:click={goToProjects}><i class="fas fa-arrow-left"></i></button>
<div class="create-project-container">
    <label id="name">Crea tu proyecto:</label>
    <input id="taskName" type="text" placeholder="Nombre la tarea" required bind:value={taskName}>
    <input id="projectName" type="text" placeholder="@ Nombre del proyecto" required bind:value={projectName}>
    <input id="tags" type="text" placeholder="# Etiquetas" required bind:value={tags}>
    <input id="rate" type="text" placeholder="Tarifa" required bind:value={rate}>
    <select id="rate-select" name="ratelist" form="rateform">
        <option value="euro">Euro(€)</option>
        <option value="dolar">Dolar($)</option>
    </select>
    <button class="create-project-button" on:click={createProject}>Crear</button>
</div>

<style>

</style>