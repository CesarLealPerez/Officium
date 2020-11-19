
<script>
    import { projects, currentView } from './draftStore.js'

    async function back () {
        $currentView='ProjectList';
    }

    async function saveProject () {
        if (htmlInput.checkValidity()) {
            const newProject = {
                name: newProjectName,
                tasks: [],
            }
            $projects.push(newProject)
            back();
        } else {
            alert('El proyecto necesita un nombre.')
        }
    }
    var htmlInput; 
    var newProjectName;
</script>

<div id="NewProject">
    <button on:click={back}>&lt;- Regresar</button>
    <input required placeholder="Nombre del proyecto..." bind:value={newProjectName} bind:this={htmlInput}>
    <button on:click={saveProject}>Guardar</button>
</div>

<style>
    div#NewProject {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        padding: 50px;
        background-color: darksalmon;
    }
    button, input {
        display: block;
    }
</style>