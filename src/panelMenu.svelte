<script>
    import Nuevo from './nuevo.svelte';
    import CerrarProyecto from './cerrarProyecto.svelte';
    import Informes from './informes.svelte'; 
    import Tarifa from './tarifa.svelte'; 
    import Menu from './menu.svelte';

    export var entramenu;

    var nuevo = false;
    var cerrarproyecto = false;
    var informes = false;
    var tarifa = false;

</script>


<button on:click={()=>{entramenu=false;}}>Volver</button>
{#if nuevo} 
    <p>Nuevo</p>  
    <Nuevo bind:nuevo/>     

{:else if cerrarproyecto}   
    <p>Cerrar Proyecto</p>
    <CerrarProyecto bind:cerrarproyecto/>

{:else if informes}
    <p>Informes</p>
    <Informes bind:informes/>

{:else if tarifa}
    <p>Tarifa</p>
    <Tarifa bind:tarifa/>

{:else if !nuevo&&!cerrarproyecto&&!informes&&!tarifa}
    <Menu bind:nuevo bind:cerrarproyecto bind:informes bind:tarifa/>  

{/if}       


<style>

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