<script>
  export let value;
  export let placeholder;
</script>

<label for="route-input" class="route-inp">
  <input bind:value id="route-input" type="text" placeholder="&nbsp;" />
  <span class="label">{placeholder}</span>
</label>

<style lang="sass">
    $dark: #000
    $primary: #0077FF

    .route-inp
        position: relative
        margin: auto
        width: 100%
        max-width: 600px
        border-radius: 5px
        overflow: hidden
    
        .label
            position: absolute
            top: 20px
            left: 20px
            font-size: 16px
            color: rgba($dark, .5)
            font-weight: 500
            transform-origin: 0 0
            transform: translate3d(0, 0, 0)
            transition: all .2s ease
            pointer-events: none
    
        input
            -webkit-appearance: none
            appearance: none
            width: 100%
            border: 0
            font-family: inherit
            padding: 16px 12px 0 12px
            height: 56px
            font-size: 16px
            font-weight: 400
            background: rgba($dark, .05)
            box-shadow: inset 0 -1px 0 rgba($dark, .3)
            color: $dark
            transition: all .15s ease
    
            &:hover
                background: rgba($dark,.04)
                box-shadow: inset 0 -1px 0 rgba($dark, .5)
            
            &:not(:placeholder-shown)
                + .label
                    color: rgba($dark, .5)
                    transform: translate3d(0, -12px, 0) scale(.75)
            
            &:focus
                background: rgba($dark, .05)
                outline: none
                box-shadow: inset 0 -2px 0 $primary
                + .label
                    color: $primary
                    transform: translate3d(0, -12px, 0) scale(.75)
</style>
