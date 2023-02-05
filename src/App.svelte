<script>
  import Main from './pages/Main.svelte';
  import {user} from './context/auth';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import SignInButton from './components/SignInButton.svelte';

  const {subscribe} = user;
  let userNow = null;
  subscribe(u => (userNow = u ? (u.profile ? u.profile.email : '') : ''));
</script>

<main>
  <Header />
  {#if userNow === ''}
    <SignInButton />
  {:else}
    <Main />
  {/if}
  <Footer />
</main>

<style>
  main {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
  }
</style>
