<script>
    import Input from "./Input.svelte"
    import Button from "./Button.svelte"

    export let onSubmit;
    export let fields;

    const fieldsToObject = (fields) =>
        fields.reduce((p, c) => ({ ...p, [c.name]: c.value }), {});

    const handleSubmit = () => onSubmit(fieldsToObject(fields));
</script>

<style>
    :global(input, select) {
        margin: 5px;
    }
</style>

<form on:submit|preventDefault={() => handleSubmit(fields)}>
    {#each fields as field}
        {#if field.type === 'Input'}
        <Input bind:value={field.value} label={field.label} placeholder={field.placeholder} />
        {/if}
    {/each}
    <Button type="submit" text="submit" />
</form>
