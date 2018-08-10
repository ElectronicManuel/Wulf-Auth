import * as firebaseAuth from '@firebase/auth';
import * as firebaseAuthTypes from '@firebase/auth-types';
import * as auth0 from 'auth0-js';

type WulfAuthOptions = {
    domain: string
    cliendID: string
    redirectUri: string
    audience: string
    firebaseTokenClaimName: string
}

export class WulfAuth {
    options: WulfAuthOptions
    firebaseAuth: firebaseAuthTypes.FirebaseAuth
    auth0: auth0.WebAuth

    constructor(options: WulfAuthOptions, firebaseAuth: firebaseAuthTypes.FirebaseAuth) {
        this.options = options;
        this.firebaseAuth = firebaseAuth;

        this.auth0 = new auth0.WebAuth({
            domain: options.domain,
            clientID: options.cliendID,
            redirectUri: options.redirectUri,
            audience: options.audience,
            responseType: 'token id_token',
            scope: 'openid profile'
        });

        this.login = this.login.bind(this);
    }

    async login() {
        this.auth0.authorize();
        
        return;
    }

}