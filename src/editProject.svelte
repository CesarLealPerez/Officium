<script>

    import {currentView, tasks, tarea1} from './store.js'
    import EditProject from './editProject.svelte';
    //export var item;
    var htmlInput;
    var htmlInput2;
    var htmlInput3;
    var htmlInput4;
    var htmlInput5;
    var taskName;
    var projectName;

    async function back(){
        $currentView = 'ProjectList';
    }

    async function task(){
        $currentView = 'Task';
    }

    async function editProject(){
        //aplicamos al elemento html5 el metodo validacion de su contenido
        if(htmlInput.checkValidity()){
            edited = [
                {
                    project: $tarea1.project,
                    name: $tarea1.name,
                    tags: $tarea1.tags,
                    rate: $tarea1.rate,
                    time: $tarea1.time
                }


            ]
            //añadimos el nuevo proyecto al projects del store
            //$tasks.push($tarea1)
            //CORREGIR EL PUSH POR UN UPDATE

            back();
        }else{
            alert('Hay errores en los datos del proyecto')
        }
    }


</script>


<p>estoy en edit project!!!!!</p>
<p> Editar Tarea </p>

<div id="EditProject">

    <button on:click={back}>Back</button><br>

    <!-- input donde metemos el nombre del proyecto y comparte con bind el nombre y el componente entero-->
    
    <input required placeholder="Nombre del proyecto..." bind:value={$tarea1.name} bind:this={htmlInput2}><br>
    <input required placeholder="Nombre de la tarea..." bind:value={$tarea1.project} bind:this={htmlInput}><br>
    <input required placeholder="Nombre de la etiqueta..." bind:value={$tarea1.tags} bind:this={htmlInput3}><br>
    <input required placeholder="Tarifa..." bind:value={$tarea1.rate} bind:this={htmlInput4}><br>
    <input required placeholder="Tiempo..." bind:value={$tarea1.time} bind:this={htmlInput5}><br>

    <button on:click={editProject}>Guardar</button>

    
</div>