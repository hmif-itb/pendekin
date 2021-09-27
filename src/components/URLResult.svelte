<script>
  import Clipboard from 'svelte-clipboard';

  export let url;
  let clicked = false;
  let className = 'not-clicked';
</script>

<Clipboard
  text={url}
  let:copy
  on:copy={() => {
    clicked = true;
    className = 'clicked';
  }}
>
  <input type="text" placeholder={url} disabled />
  <button on:click={copy} class={className}>
    {!clicked ? 'Copy' : 'Copied!'}
  </button>
</Clipboard>

<style>
  button {
    background-color: #ff3e00;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-left: 10px;
    border-radius: 5px;
    transition: 0.5s;
  }
  .clicked {
    background-color: #32cd32;
  }
  .clicked:hover {
    background-color: #336105;
    cursor: pointer;
  }
  .not-clicked {
    background-color: #ff3e00;
  }
  .not-clicked:hover {
    background-color: #a82900;
    cursor: pointer;
  }
</style>
