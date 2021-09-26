<script>
    export let value;
    export let placeholder;
    export let label;
    export let name;
    export let id;
</script>

<label for={id}>{label}</label>
<input bind:value {placeholder} {id} {name} type="text" />

<style>
    label {
        font-size: 2em;
        margin-bottom: 20px;
    }
</style>