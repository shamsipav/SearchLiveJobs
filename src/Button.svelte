<script>
    export let variant = "primary";
    let variantClass = `variant-${variant}`
</script>

<button class="{variantClass}" on:click>
    <slot/>
</button>

<style>
    .variant-primary {
        background-color: transparent;
        font-weight: bold;
    }
    .variant-primary:hover {
        text-decoration: underline;
    }
    .variant-blue {
        background-color: #367cff;
		color: #fff;
		border-radius: 12px;
    }
    .variant-blue:hover {
        background-color: #2462d6;
        transition: all 0.3s ease;
    }
    .variant-lightblue {
        font-weight: bold;
        background-color: transparent;
        color: #334680;
        padding: 5px 15px;
        border-radius: 20px;
    }
    .variant-lightblue:hover {
        background-color: #d7dbff;
    }
    .variant-show {
        background-color: transparent;
        color: #516193;
        margin: 0 auto;
        width: 100%;
    }
    .variant-show:hover {
        text-decoration: underline;
    }
</style>