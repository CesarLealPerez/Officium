<script>

   // export var entramenu;

    function timerOn() {
	
}

function timerOff(){

}

function pause(){

}


var proyecto;
	var cliente;
	var tiempoInvertido;
	var tarificacionNormal;
	var tarificacionExtras;
	var fechaInicio;
	var fechaFinal;
  var tiempoActual;
  var inicioTarifaNormal;
  var finTarifaNormal;
  var precioTarifaNormal;
  var horaExtra;
  var horasExtras;
  



function tarifa(){
  /*
  {#if (inicioTarifaNormal >= tiempoActual <= finTarifaNormal)}
    (tiempoInvertido*precioTarifaNormal) = tarificacionNormal;
  {:else}
    (tiempoInvertido*horaExtra) = tarificacionExtras
  {/if}
  */
}

/*
var endpoint = `http://localhost:3000/proyecto/?proyectoBuscado=${proyecto.toUpperCase()}`;

fetch (endpoint)
.then(response=>response.json())
    .then(obj=>{

		proyecto= obj.proyecto;
        cliente= obj.cliente;
        tiempoInvertido= obj.tiempoInvertido;
        tarificacionNormal= obj.tarificacionNormal;
        horasExtras= obj.horasExtras;
        fechaInicio= obj.fechaInicio;
        fechaFinal= obj.fechaFinal;
        
    })
*/

</script>


<main>

	
	<h1>Tasktracker</h1>
	<p>Tú actividad</p>


	<fieldset>
        <legend>Tarea:</legend>
        <p>Nombre:{proyecto}</p>
        <p>Cliente:{cliente}</p>
        <p>Tiempo Invertido:{tiempoInvertido}</p> 
        <p>Tarifa:{tarificacionNormal}</p>
        <p>Tarifa Extraordinaria:{horasExtras}</p>
        <p>Inicio de proyecto:{fechaInicio}</p>
        <p>Fecha de Finalizacion:{fechaFinal}</p>
	</fieldset>


	<button on:click={timerOn}>Comenzar Tarea</button>
	<button on:click={pause}>Pausa</button>
	<button on:click={timerOff}>Finalizar tarea</button>

	

</main>

<style>

h1 {
	color: #003cff;
	font-family: "Goldman";
	font-size: 4em;
	font-weight: 100;
}

button{
  
  width: auto;
  height: 100px;
  border-radius: 30px;
  border: 2px solid black;
  font-size: 1.5rem;
  font-weight: 600;
  background-size: 100% 100%;
  margin-bottom: 15px;
  margin-inline: 20px;

}

</style>