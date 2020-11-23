<script>
  // Inicio prueba Menu
  //import App from './App.svelte';
  //import PanelMenu from './panelMenu.svelte';
  //import PanelPrincipal from './panelPrincipal.svelte';
  //var entramenu = false;
  // Fin prueba Menu

  // Inicio Prueba Nuevo proyecto
  import NewProject from './NewProject.svelte';
  import Principal from './principal.svelte';
  import Chronometer from './Chronometer.svelte';
  // Fin prueba Nuevo proyecto
</script>

<section class="test">
  <h2>Test Principal</h2>
  <Principal/>
</section>

<section class="test">
  <h2>Test NewProject</h2>
  <NewProject/>
</section>

<section class="test">
  <h2>Test Chronometer</h2>
  <Chronometer/>
</section>

<style>
  .test{
    border-style: solid;
    margin: 30px;
    padding: 30px;
  }
</style>
