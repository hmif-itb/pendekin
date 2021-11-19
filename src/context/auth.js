/* eslint-disable no-undef */
import {writable} from 'svelte/store'

let auth2;
const {subscribe, set, update} = writable(null);
const signin = () => auth2.signIn();
const logout = () => auth2.signOut();

const process = proc;
const client_id = process.env.CLIENT_ID;

gapi.load('auth2', () => {
    auth2 = gapi.auth2.init({
        client_id: client_id,
        scope: 'profile'
    })

    auth2.isSignedIn.listen((loggedIn) => {
        if (loggedIn) {
            const u = auth2.currentUser.get();
            const profile = u.getBasicProfile();
            if (profile.getEmail().split('@')[1] === "std.stei.itb.ac.id") {
                update(() => ({
                    profile: {
                        id: profile.getId(),
                        name: profile.getName(),
                        image: profile.getImageUrl(),
                        email: profile.getEmail()
                    },
                    token: u.getAuthResponse().id_token
                }))
            } else {
                console.log("invalid email domain, must be std.stei.itb.ac.id!")
            }
        } else {
            update(() => null)
        }
    })
})

export const user = {
    subscribe, signin, logout
}