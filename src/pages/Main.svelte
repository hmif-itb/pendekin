<script>
  import Form from '../components/Form.svelte';
  import Code from '../components/Code.svelte';
  import Status from '../components/Status.svelte';
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';
  import Logout from '../components/Logout.svelte';
  import {user} from '../context/auth';

  let userEmail;
  const {subscribe} = user;
  subscribe(u => {
    userEmail = u ? (u.profile ? u.profile.email : null) : null;
  });

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
  let apiResponse = null;
  let shortUrl;
  let invalidUrl = false;
  let invalidRoute = false;
  let err = false;

  const isValidUrl = url => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  const isValidRoute = route => {
    return route !== '';
  };

  const handleSubmit = body => {
    if (!isValidUrl(body.url)) {
      invalidUrl = true;
      return;
    }

    if (!isValidRoute(body.route)) {
      invalidRoute = true;
      return;
    }

    invalidUrl = false;
    invalidRoute = false;
    err = false;
    shortUrl = `hmif.link/${body.route}`;
    loading = true;

    const config = {
      body: JSON.stringify(body),
      method: 'post',
      headers: {'Content-type': 'application/json'}
    };

    fetch('/', config)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        apiResponse = data;
        loading = false;
      })
      .catch(err => {
        console.log(err);
        err = true;
        loading = false;
      });
  };
</script>

<main>
  <Header />
  <Logout currentUser={userEmail} />
  <Code />
  <Form onSubmit={handleSubmit} {fields} />
  <Status
    {loading}
    {invalidUrl}
    {invalidRoute}
    {apiResponse}
    {shortUrl}
    {err}
  />
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
</style>
