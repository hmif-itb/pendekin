<script>
    import Button from "./Button.svelte"
    import Input from "./Input.svelte"

    export let onSubmit;
    export let fields;

    const fieldsToObject = (fields) =>
        fields.reduce((p, c) => ({ ...p, [c.name]: c.value }), {});

    const handleSubmit = () => onSubmit(fieldsToObject(fields));
</script>

<form on:submit|preventDefault={() => handleSubmit(fields)}>
    {#each fields as field}
        {#if field.type === 'Input'}
        <Input bind:value={field.value} placeholder={field.placeholder} />
        {/if}
    {/each}
    <Button type="submit" text="Submit" />
</form>

<style>
    :global(input, select) {
        margin: 5px;
    }
</style>
