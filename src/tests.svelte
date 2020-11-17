<script>

    import App from './App.svelte';
    import Principal from './principal.svelte';

    import { currentView, currentRate, tasks } from './store.js';

</script>


<section class="test">

    <Principal/>    

</section>



<style>

    section.test {
      border-style: solid;
      margin: 30px;
      padding: 30px;
    }

</style>


