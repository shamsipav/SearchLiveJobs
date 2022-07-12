<script>
    export let variant = "primary";
</script>

{#if variant == "primary"}
	<button class="primary">
        <slot></slot>
    </button>
{:else if variant == "blue"}
	<button class="blue">
        <slot></slot>
    </button>
{:else if variant == "lightblue"}
	<button class="lightblue">
        <slot></slot>
    </button>
{:else if variant == "show"}
	<button class="show">
        <slot></slot>
    </button>
{/if}

<style>
    .primary {
        background-color: transparent;
        font-weight: bold;
    }
    .primary:hover {
        text-decoration: underline;
    }
    .blue {
        background-color: #367cff;
		color: #fff;
		border-radius: 12px;
    }
    .blue:hover {
        background-color: #2462d6;
        transition: all 0.3s ease;
    }
    .lightblue {
        font-weight: bold;
        background-color: transparent;
        color: #334680;
        padding: 5px 15px;
        border-radius: 20px;
    }
    .lightblue:hover {
        background-color: #d7dbff;
    }
    .show {
        background-color: transparent;
        color: #516193;
        margin: 0 auto;
        width: 100%;
    }
    .show:hover {
        text-decoration: underline;
    }
</style>