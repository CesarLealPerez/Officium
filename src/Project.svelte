<script>
    export var item;
    /*Plantilla tan solo para ser llamada desde el "TaskTracker.svelte"*/
</script>

<button>
    Prueba
    <p>{item.name}</p>
    <p><button on:click=""></button></p>
</button>

<style>
    button {
        display: block;
        background-color: darksalmon;
    }
</style>