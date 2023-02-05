<script>
  import Form from '../components/Form.svelte';
  import Status from '../components/Status.svelte';
  import Header from '../components/Header.svelte';
  import Logout from '../components/Logout.svelte';
  import {user} from '../context/auth';

  let userEmail;
  let userToken;
  const {subscribe} = user;
  subscribe(u => {
    if (u) {
      if (u.profile) {
        userEmail = u.profile.email;
      }
      userToken = u.token;
    }
  });

  let fields = [
    {
      name: 'url',
      type: 'Input',
      value: '',
      placeholder: 'URL yang mau dipendekin (contoh: https://hmif.dev)'
    },
    {
      name: 'route',
      type: 'Input',
      value: '',
      placeholder: 'Route/nama pendek: (contoh: website-resmi-hmif)'
    }
  ];

  let loading = false;
  let responseCode = 0;
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

  const handleSubmit = form => {
    if (!isValidUrl(form.url)) {
      invalidUrl = true;
      return;
    }

    if (!isValidRoute(form.route)) {
      invalidRoute = true;
      return;
    }

    invalidUrl = false;
    invalidRoute = false;
    err = false;
    shortUrl = `s.hmif.dev/${form.route}`;
    loading = true;

    const body = {...form, email: userEmail};
    const config = {
      body: JSON.stringify(body),
      method: 'post',
      headers: {
        'Authorization': 'Bearer ' + userToken,
        'Content-type': 'application/json',
      }
    };

    fetch('/', config)
      .then(res => {
        console.log(res);
        responseCode = res.status;
      })
      .catch(err => {
        console.log(err);
        err = true;
      })
      .finally(() => {
        loading = false;
      });
  };
</script>

<main>
  <Header />
  <Logout currentUser={userEmail} />
<!--  <Code />-->
  <hr style="margin: 2rem" />
  <Form onSubmit={handleSubmit} {fields} />
  <Status
    {loading}
    {invalidUrl}
    {invalidRoute}
    {responseCode}
    {shortUrl}
    {err}
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
</style>
