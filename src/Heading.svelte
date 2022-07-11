<script>
    export let size;
    const options = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    let selected = options[size - 1];
</script>

<svelte:element this={selected} class="{selected}">
    <slot></slot>
</svelte:element>

<style>
    .h1, .h2, .h3 {
        font-family: "Qanelas";
		font-weight: 800; 
    }
    .h1 {
        font-size: 48px;
        letter-spacing: 1.5px;
    }
    .h2, .h3 {
        letter-spacing: 1.2px;
        text-align: center;
    }
    .h2 {
        font-size: 32px;
    }
    .h3 {
        font-size: 28px;
    }
</style>