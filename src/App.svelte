<script lang="ts">
	import Header from './Header.svelte';
	import Heading from './Heading.svelte';
	import { vacancies } from './vacancies.js'
	import Vacancy from './Vacancy.svelte';
	import { companies } from './companies.js'
	import FeaturedCompany from './FeaturedCompany.svelte';
	import Footer from './Footer.svelte';
	import Button from './Button.svelte';

	let vacancyList = vacancies;

	function addVacancy() {
		vacancyList = vacancyList.concat({ 
			id: 5,
        	logo: "img/apple.png",
        	title: "Apple Main Manager",
        	name: "Apple Inc.",
        	location: "Los Angeles",
        	isFullTime: true,
        	date: "April 12, 2020",
		 });
	}
</script>

<Header />

<section class="main">
	<div class="container container-bg">
		<div class="main__content">
			<div class="main__text">
				<Heading size={1}>Search 7 Live Jobs</Heading>
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
			<Button variant="blue">Search</Button>
		</form>
	</div>
</section>

<section class="vacancies">
	<div class="container container-sm">
		{#each vacancyList as vacancy (vacancy.id)}
			<Vacancy {...vacancy} />
		{/each}
		{#if vacancyList.length < 5}
			<Button on:click={addVacancy} variant="show">View All Job postings (5)</Button>
		{/if}
	</div>
</section>

<section class="sort">
	<div class="container container-em">
		<Heading size={3}>Sort By</Heading>
		<div class="sort__change">
			<Button variant="lightblue">Jobs by Category</Button>
			<Button variant="lightblue">Jobs by City</Button>
			<Button variant="lightblue">Jobs by State</Button>
		</div>
		<ul class="sort__list">
			<li><a href="sort/accounting">Accounting (5)</a></li>
			<li><a href="sort/banking">Banking (1)</a></li>
			<li><a href="sort/human Resource">Human Resource (1)</a></li>
			<li><a href="sort/admin-Clerical">Admin-Clerical (5)</a></li>
			<li><a href="sort/finance">Finance (5)</a></li>
			<li><a href="sort/management">Management (1)</a></li>
		</ul>
	</div>
</section>

<section class="featured">
	<div class="container">
		<Heading size={2}>Featured Companies</Heading>
		<div class="companies">
			{#each companies as company (company.id)}
				<FeaturedCompany {...company} />
			{/each}
		</div>
	</div>
</section>

<Footer/>