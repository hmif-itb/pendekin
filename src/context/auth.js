import {writable} from 'svelte/store'

const {subscribe, set, update} = writable({});

export const user = {
    update, set, subscribe
}
