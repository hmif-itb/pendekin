<script>
  import Button from '../components/Button.svelte';

  export let currentUser;
</script>

<p>Signed in as <strong>{currentUser}</strong></p>
<Button handleClick={() => window.location.reload()} text="Sign out" />
