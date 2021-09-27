<script>
  import Button from './Button.svelte';
  import Input from './Input.svelte';

  export let onSubmit;
  export let fields;

  const fieldsToObject = fields =>
    fields.reduce((p, c) => ({...p, [c.name]: c.value}), {});

  const handleSubmit = () => onSubmit(fieldsToObject(fields));
</script>

<div class="form-wrapper">
  <form on:submit|preventDefault={() => handleSubmit(fields)}>
    {#each fields as field}
      {#if field.type === 'Input'}
        <Input bind:value={field.value} placeholder={field.placeholder} />
      {/if}
    {/each}
    <Button type="submit" text="pendekin!" />
  </form>
</div>

<style>
  :global(input, select) {
    margin: 10px;
  }
  .form-wrapper {
    margin-bottom: 50px;
  }
</style>
