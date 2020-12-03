
<script>
  import Tests from './Principal.svelte';
  import Drawer, {AppContent, Content, Scrim} from '@smui/drawer';
  import Button, {Label} from '@smui/button';
  import List, {Item, Text, Graphic} from '@smui/list';
  let myDrawer2;
  let myDrawer2Open = false;
</script>
  
<div class="drawer-container">
  <Drawer variant="modal" bind:this={myDrawer2} bind:open={myDrawer2Open}>
    <Content>
      <List>
        <Item href="javascript:void(0)">
          <Graphic><img src="img/icon_sign_in_up_green.png" alt="Ajustes"></Graphic>
          <Text><a style="color:white;font-weight:700" href="#" >Ajustes</a></Text>
        </Item>
        <Item href="javascript:void(0)">
          <Graphic><img src="img/icon_orders_green.png" alt="Informes"></Graphic>
          <Text><a style="color:white;font-weight:700" href="#">Informes</a></Text>
        </Item>
        <Item href="javascript:void(0)">
          <Graphic><img src="img/icon_settings_green.png" alt="Información"></Graphic>
          <Text><a style="color:white;font-weight:700" href="./img/AvisoLegal.pdf" target="_blank">Información</a></Text>
        </Item>
        <Item style="margin-top:40px" href="javascript:void(0)">
          <Text>Términos & Condiciones</Text>
        </Item>
        <Item href="javascript:void(0)">
          <Text>Politica de privacidad</Text>
        </Item>
        <Item href="javascript:void(0)" >
          <Text>Faq & Soporte</Text>
        </Item>
      </List>
    </Content>
  </Drawer>

  <Scrim />
  <AppContent class="app-content">
    <main class="main-content">
      <Button on:click={() => myDrawer2Open = !myDrawer2Open} style="padding-top:20px">
          <img src="img/Side_Menu_blanco.png" alt="Menu">
      </Button>
      <Tests/>
      <div style="height: 700px;">&nbsp;</div>
    </main>
  </AppContent>
</div>

<style>
  .drawer-container {
    position: relative;
    display: flex;
    height: 350px;
    max-width: 600px;
    overflow: hidden;
    z-index: 0;
  }
  * :global(.mdc-drawer--modal, .mdc-drawer-scrim) {
    /* This is not needed for a page-wide modal. */
    position: absolute;
  }
  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }
  .main-content {
    overflow: auto;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
    background-color: #1A1824;
  }
</style>