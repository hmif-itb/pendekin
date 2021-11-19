<script>
  window.signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {});
  };
</script>

<a on:click={signOut}>Sign out</a>
