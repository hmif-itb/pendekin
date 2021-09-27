<script>
  import Form from './components/Form.svelte';
  import Code from './components/Code.svelte';
  import Loading from './components/Loading.svelte';
  import Footer from './components/Footer.svelte';
  import Header from './components/Header.svelte';

  let fields = [
    {
      name: 'url',
      type: 'Input',
      value: '',
      placeholder: 'Enter the url...'
    },
    {
      name: 'route',
      type: 'Input',
      value: '',
      placeholder: 'Enter the route...'
    }
  ];

  let loading = false;

  const handleSubmit = body => {
    loading = true;

    const process = proc;
    const url = process.env.API_URL;

    const config = {
      body: JSON.stringify(body),
      method: 'post',
      headers: {'Content-type': 'application/json'}
    };

    fetch(url, config)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        loading = false;
      })
      .catch(err => {
        console.log(err);
        loading = false;
      });
  };
</script>

<main>
  <Header />
  <Code />
  <Form onSubmit={handleSubmit} {fields} />
  <Loading {loading} />
  <Footer />
</main>

<style>
  main {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
