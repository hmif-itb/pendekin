<script>
  import {user} from '../context/auth';

  let {auth2, update} = user;

  const process = proc;
  const client_id = process.env.CLIENT_ID;

  let invalidSignInStatus = '';
  let invalidEmail = '';
  let angryEmoji = '';
  const emojis = ['😤', '😬', '💀', '😭', '😱'];
  const random = x => Math.floor(x * Math.random());

  window.onLoadCallback = () => {
    gapi.load('auth2', () => {
      auth2 = gapi.auth2.init({
        client_id: client_id,
        cookiepolicy: 'single_host_origin',
        scope: 'profile'
      });
      auth2.isSignedIn.listen(loggedIn => {
        if (loggedIn) {
          invalidSignInStatus = false;
          const u = auth2.currentUser.get();
          const profile = u.getBasicProfile();
          const email = profile.getEmail();
          if (email.split('@')[1] === 'std.stei.itb.ac.id') {
            update(() => ({
              profile: {
                id: profile.getId(),
                name: profile.getName(),
                image: profile.getImageUrl(),
                email: profile.getEmail()
              },
              token: u.getAuthResponse().id_token
            }));
          } else {
            invalidSignInStatus = true;
            invalidEmail = email;
            angryEmoji = emojis[random(emojis.length)];
            auth2.signOut().then(() => {});
          }
        } else {
          update(() => {});
        }
      });
      attachSignin(document.getElementById('loginBtn'));
    });

    const attachSignin = element => {
      auth2.attachClickHandler(
        element,
        {},
        function () {},
        function (error) {
          alert(JSON.stringify(error, undefined, 2));
        }
      );
    };
  };
</script>

<svelte:head>
  <script src="https://apis.google.com/js/api:client.js" async defer></script>
  <script
    src="https://apis.google.com/js/platform.js?onload=onLoadCallback"
    async
    defer>
  </script>
  <script src="https://apis.google.com/js/api.js"></script>
</svelte:head>

<div id="gSignInWrapper">
  <div id="loginBtn" class="customGPlusSignIn">
    <span class="icon" />
    <span class="buttonText">Sign in with student email</span>
  </div>
</div>
{#if invalidSignInStatus}
  <div id="invalidWrapper">
    <div id="name">
      Attempting to sign in with <strong>{invalidEmail}</strong>. Please use
      your student email (<em>std.stei.itb.ac.id</em>)!
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
  #loginBtn {
    display: inline-block;
    background: white;
    color: #444;
    width: 300px;
    height: 42px;
    border-radius: 5px;
    border: thin solid #888;
    white-space: nowrap;
    transition: 0.5s;
  }
  #loginBtn:hover {
    cursor: pointer;
    background: rgb(238, 238, 238);
  }
  span.icon {
    background: url('/identity/sign-in/hmif.png') transparent 0.5px 5% no-repeat;
    display: inline-block;
    vertical-align: middle;
    width: 42px;
    height: 42px;
  }
  span.buttonText {
    display: inline-block;
    vertical-align: middle;
    padding-left: 42px;
    padding-right: 42px;
    font-size: 14px;
  }
</style>
