<script>
  import {user} from '../context/auth';
  import Button from './Button.svelte';

  let {update} = user;

  let invalidSignInStatus = false;
  let invalidEmail = '';
  let angryEmoji = '';
  const emojis = ['😤', '😬', '💀', '😭', '😱'];
  const random = x => Math.floor(x * Math.random());

  /**
   * Method to parse JWT
   * Taken from: https://stackoverflow.com/a/38552302
   * @param {string} jwt
   */
  function parseJwt(jwt) {
    const base64Url = jwt.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  function handleCredentialResponse(response) {
    const jwt = response.credential;

    invalidSignInStatus = false;
    const profile = parseJwt(jwt);
    const email = profile.email;
    if (email.split('@')[1] === 'std.stei.itb.ac.id') {
      update(() => ({
        profile: {
          name: profile.name,
          image: profile.picture,
          email: profile.email,
        },
        token: jwt,
      }));
    } else {
      invalidSignInStatus = true;
      invalidEmail = email;
      angryEmoji = emojis[random(emojis.length)];
    }
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "339709464019-e67j1a3qp8ld22tho6l4u228k6g4k94v.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("loginBtn"),
      { theme: "outline", size: "large" }  // customization attributes
    );
  }
</script>

<svelte:head>
  <script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<Button id="loginBtn" text="Sign in with email std!" />

{#if invalidSignInStatus}
  <div id="invalidWrapper">
    <div id="name">
      Attempting to sign in with <strong>{invalidEmail}</strong>. Please use
      your STEI ITB student email (<em>std.stei.itb.ac.id</em>)!
    </div>
    <div id="emoji">{angryEmoji}</div>
  </div>
{/if}

<style>
  #invalidWrapper {
    padding: 20px;
    margin: 20px;
  }
  #emoji {
    font-size: 50px;
  }
</style>
