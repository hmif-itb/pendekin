<script>
    export let type;
    export let text;
</script>

<button {type}>
    {text}
</button>

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
    button:hover {
        background-color: #a82900;
        cursor: pointer;
    }
</style>