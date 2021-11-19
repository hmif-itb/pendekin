<script>
  import Button from '../components/Button.svelte';

  window.signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      window.location.reload(true);
    });
  };

  export let currentUser;
</script>

<p>Signed in as <strong>{currentUser}</strong></p>
<Button handleClick={signOut} text="Sign out" />
