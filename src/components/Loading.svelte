<script>
  export let loading;
</script>

<div class="loader-wrapper">
  {#if loading === true}
    <div class="loader" />
  {/if}
</div>

<style>
  .loader-wrapper {
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
