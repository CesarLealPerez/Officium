<script>

import { currentView } from './store.js';
import ProjectList from './ProjectList.svelte';
import NewProject from './NewProject.svelte';

const views = {
  'ProjectList': ProjectList,
  'NewProject': NewProject,
}

$currentView = 'NewProject'; // Sets starting component.

</script>
<main>
<section id="drafts">
    <svelte:component this={views[$currentView]}/>
</section>
</main>

<style>
  .test{
    border-style: solid;
    margin: 30px;
    padding: 30px;
  }
</style>
