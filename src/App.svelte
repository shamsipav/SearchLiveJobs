<script>
	import Header from './Header.svelte';
	import { vacancies } from './vacancies.js'
	import Vacancy from './Vacancy.svelte';
	import SecondHeading from './SecondHeading.svelte';
	import { companies } from './companies.js'
	import FeaturedCompany from './FeaturedCompany.svelte';
	import Footer from './Footer.svelte';
</script>

<Header />

<section class="main">
	<div class="container container-bg">
		<div class="main__content">
			<div class="main__text">
				<h1 class="main__heading">Search 7 Live Jobs</h1>
				<p class="main__description">Finding your new job just got easier</p>
			</div>
		</div>
		<form action="#" class="main__form form">
			<div class="form__group _icon-search">
				<input type="text" placeholder="Search for job">
			</div>
			<div class="form__group _icon-location_on">
				<input type="text" placeholder="Set location">
			</div>
			<button class="form__submit">Search</button>
		</form>
	</div>
</section>

<section class="vacancies">
	<div class="container container-sm">
		{#each vacancies as vacancy (vacancy.id)}
			<Vacancy {...vacancy} />
		{/each}
		<a href="#" class="vacancies__more">View All Job postings (5)</a>
	</div>
</section>

<section class="sort">
	<div class="container container-em">
		<SecondHeading title="Sort By" size=28 />
		<div class="sort__change">
			<button class="sort__by active">Jobs by Category</button>
			<button class="sort__by">Jobs by City</button>
			<button class="sort__by">Jobs by State</button>
		</div>
		<ul class="sort__list">
			<li><a href="#">Accounting (5)</a></li>
			<li><a href="#">Banking (1)</a></li>
			<li><a href="#">Human Resource (1)</a></li>
			<li><a href="#">Admin-Clerical (5)</a></li>
			<li><a href="#">Finance (5)</a></li>
			<li><a href="#">Management (1)</a></li>
		</ul>
	</div>
</section>

<section class="featured">
	<div class="container">
		<SecondHeading title="Featured Companies" size=32 />
		<div class="companies">
			{#each companies as company (company.id)}
				<FeaturedCompany {...company} />
			{/each}
		</div>
	</div>
</section>

<Footer/>

<style>
	.main {
		padding: 50px 0px 0px 0px;
	}
	.container-bg {
		max-width: 1410px;
	}
	.container-sm {
		max-width: 840px;
	}
	.container-em {
		max-width: 550px;
	}
	.main__content {
		background-color: #2aadf9;
		border-radius: 12px;
		width: 100%;
		height: 324px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.main__text {
		text-align: center;
		color: #fff;
	}
	.main__heading {
		font-family: "Qanelas";
		font-weight: 800;
		font-size: 48px;
		letter-spacing: 1.5px;
	}
	.main__description {
		font-size: 20px;
	}
	.form {
		height: 90px;
		margin: 0 auto;
    	background-color: #fff;
    	position: relative;
    	top: -45px;
		max-width: 800px;
		border-radius: 12px;
		padding: 15px 10px;
		display: grid;
    	grid-template-columns: 45% 1fr 20%;
		-webkit-box-shadow: 4px 4px 30px 0px rgba(41, 144, 223, 0.2);
		-moz-box-shadow: 4px 4px 30px 0px rgba(41, 144, 223, 0.2);
		box-shadow: 4px 4px 30px 0px rgba(41, 144, 223, 0.2);
	}
	.form__group {
		display: flex;
    	padding: 10px 0px 10px 20px;
	}
	.form__group::before {
		font-size: 18px;
		display: flex;
		align-items: center;
		color: #367cff;
	}
	.form__group input {
		padding: 0px 18px;
	}
	.form__submit:first-child {
		border-right: 1px solid gray;
	}
	.form__submit {
		background-color: #367cff;
		color: #fff;
		border-radius: 12px;
	}

	.vacancies {
		padding: 100px 0px 0px 0px;
	}
	.vacancies__more {
		display: block;
		text-align: center;
	}

	.sort {
		padding: 90px 0px 0px 0px;
	}
	.sort__change {
		display: flex;
    	justify-content: space-between;
		margin: 40px 0px 45px 0px;
	}
	.sort__by {
		font-weight: bold;
		background-color: transparent;
		color: #334680;
		padding: 5px 15px;
    	border-radius: 20px;
	}
	.sort__by.active {
		background-color: #d7dbff;
	}
	.sort__by:hover {
		background-color: #d7dbff;
		transition: all 0.3s ease;
	}
	.sort__list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-row-gap: 12px;
		grid-column-gap: 40px;
		justify-content: space-between;
	}

	.featured {
		padding: 115px 0px 0px 0px;
	}
	.companies {
		margin: 52px 0px 0px 0px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 36px;
	}
</style>