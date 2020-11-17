<script>

    import {tasks, currentView} from './store.js'
    var taskName;
    var projectName;
    var htmlInput, htmlInput2, htmlInput3, htmlInput4, htmlInput5;
    var etiqueta;
    var tarifa = 0;
    var time = 0;

    async function back(){
        $currentView = 'ProjectList';
    }

    async function task(){
        $currentView = 'Task';
    }

    async function saveProject(){
        //aplicamos al elemento html5 el metodo validacion de su contenido
        if(htmlInput.checkValidity()){
            const newProject = [
                {
                    project: projectName,
                    name: taskName, 
                    tags: etiqueta,
                    rate: tarifa,
                    time: time,
                }
            ]
            //añadimos el nuevo proyecto al projects del store
            $tasks.push(newProject)
            
            //pasamos a la pantalla de tasks
            task();
        }else{
            alert('El proyecto necesita un nombre.')
        }
    }
    var htmlInput;
    var newProjectName;

</script>

<p> Nuevo Proyecto </p>


<div id="NewProject">

    <button on:click={back}>Back</button><br>

    <!-- input donde metemos el nombre del proyecto y comparte con bind el nombre y el componente entero-->
    
    <input required placeholder="Nombre del proyecto..." bind:value={projectName} bind:this={htmlInput2}><br>
    <input required placeholder="Nombre de la tarea..." bind:value={taskName} bind:this={htmlInput}><br>
    <input required placeholder="Nombre de la etiqueta..." bind:value={etiqueta} bind:this={htmlInput3}><br>
    <input required placeholder="Nombre de la etiqueta..." bind:value={tarifa} bind:this={htmlInput4}><br>
    <input required placeholder="Tarifa..." bind:value={time} bind:this={htmlInput5}><br>

    <button on:click={saveProject}>Guardar</button>

</div>


<style>
    div#testNewProject {
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