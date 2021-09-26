<script>
	import Form from "./components/Form.svelte";
	import Head from "./components/Head.svelte";

	let fields = [
		{
			name: "url",
			type: "Input",
			value: "",
			placeholder: "Enter the url...",
		},
		{
			name: "route",
			type: "Input",
			value: "",
			placeholder: "Enter the route...",
		},
	];

	const handleSubmit = (body) => {
		const process = proc;
		const url = process.env.API_URL;

		const config = {
			body: JSON.stringify(body),
			method: "post",
			headers: {"Content-type": "application/json"}
		}

		fetch(url, config)
			.then(res => {
				return res.json()
			})
			.then(data => {
				console.log(data)
			})
			.catch(err => {
				console.log(err)
			});
	}

	let result = {};
</script>

<main>
    <h1>pendekin</h1>
	<h2>by HMIF Tech</h2>
	<Head/>
	<Form
		onSubmit={handleSubmit}
		{fields}
	/>
</main>

<style>
	main {
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	h1 {
		color: black;
		font-size: 6em;
		margin-bottom: 0px;
	}

	h2 {
		color: #ff3e00;
		font-size: 2em;
		margin-top: 0px
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
