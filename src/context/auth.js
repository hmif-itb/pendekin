import {writable} from 'svelte/store'

let auth2;
const {subscribe, set, update} = writable({});
const signin = () => auth2.signIn();
const logout = () => auth2.signOut();

export const user = {
    update, set, subscribe, signin, logout
}
