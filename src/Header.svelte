<script>
	import Button from './Button.svelte';

    import Modal from './Modal.svelte';
	import Content from './Content.svelte';
	import { modal } from './stores.js';
</script>
<header>
    <div class="container">
        <div class="header__logo">Company Logo</div>
        <nav>
            <ul>
                <li><a href="#" class="link">Jobs</a></li>
                <li><a href="#" class="link">Companies</a></li>
                <li><a href="#" class="link">Post a Job</a></li>
                <li><a href="#" class="link">Resume Search</a></li>
                <li><a href="#" class="link">Prising</a></li>
            </ul>
        </nav>
        <div class="header__auth">
            <Button>Sign in</Button>
            <span class="line"></span>
            <Modal show={$modal}>
	            <Content />
            </Modal>
        </div>
    </div>
</header>

<style>
    header {
        padding: 50px 0px 0px 0px;
    }
    .container {
        display: flex;
        align-items: center;
    }
    .header__logo {
        margin: 0px 148px 0px 0px;
        font-weight: bold;
    }
    nav {
        margin: 0px auto 0px 0px;
    }
    nav ul {
        display: flex;
    }
    nav ul li:not(:last-child) {
        margin: 0px 30px 0px 0px;
    }
    .header__auth {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 17px;
        align-items: center;
    }
    .header__auth button {
        background-color: transparent;
        font-weight: bold;
    }
    .header__auth button:hover {
        text-decoration: underline;
    }
    .line {
        position: relative;
        top: 2px;
        width: 2px;
        height: 50%;
        background-color: #516193;
    }
</style>