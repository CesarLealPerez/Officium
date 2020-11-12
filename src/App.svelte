<script>

import PanelMenu from './panelMenu.svelte';
import PanelPrincipal from './panelPrincipal.svelte';

var entramenu = false;


</script>


<div>  

  {#if entramenu} 
      <PanelMenu bind:entramenu/>

  {:else}	
      <button on:click={()=>{entramenu=true}}>Menu</button>
      <PanelPrincipal bind:entramenu/>	
      
  {/if}	

</div>

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