<script>
    import { getContext } from 'svelte';
	
    import Popup from './Popup.svelte';
	import Button from './Button.svelte';

  	const { open } = getContext('simple-modal');

  	const showPopup = () => {
		open(Popup);
	};

</script>

<Button on:click={showPopup}>Sign Up</Button>