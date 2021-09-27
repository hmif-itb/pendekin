<script>
  import URLResult from './URLResult.svelte';

  export let loading;
  export let apiResponse;
  export let shortUrl;
  export let invalid;
  export let err;
</script>

<div class="wrapper">
  {#if invalid === true}
    <p>
      url is not valid, make sure it starts with
      <code>http://</code>
      or
      <code>https://</code>
    </p>
  {:else if loading === true}
    <div class="loader" />
  {:else if loading === false && apiResponse !== null}
    {#if apiResponse.status === 'SUCCESS'}
      <p>your url has been shortened! Congrats 😄</p>
      <URLResult url={shortUrl} />
    {:else if apiResponse.status === 'FAILED'}
      <p>
        shortlink <code>{shortUrl}</code> already exist, try another route!
      </p>
    {/if}
  {:else if err}
    <p>error occured, please try again!</p>
  {/if}
</div>

<style>
  p {
    font-size: 20px;
    font-weight: 200;
  }

  .wrapper {
    background-color: white;
    width: 100%;
    text-align: center;
    height: 200px;
  }

  .loader {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #e5b567;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    margin: 40px auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
