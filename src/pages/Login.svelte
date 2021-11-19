<script>
  import Header from '../components/Header.svelte';
  import Main from './Main.svelte';
  import SignInButton from '../components/SignInButton.svelte';
  import {user} from '../context/auth';
</script>

<main>
  <Header />
  {#if $user}
    <Main />
  {:else}
    <SignInButton />
  {/if}
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
