<script>
import { projects } from './drafts/draftStore.js';

$projects = { name: false };

async function startTask(){

		projects.name = !projects.name;
};

/*
async function endTask(){

}
*/


</script>

<main>

{#if projects.name}

	<button class="start" on:click={startTask}>
		Start Task
	</button>
{/if}

{#if !projects.name}
	<button class="end" on:click={startTask}>
	    End Task
	</button>
{/if}



</main>
<style>

</style>