import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import Auth0 from 'auth0-js';

@Injectable()
export class AuthenticationServiceProvider {
    auth0 = new Auth0.WebAuth({
        clientID: 'PjHyG72o26fvvSmiQ3kaE3gDZyG-vp6_',
        domain: 'spub.eu.auth0.com',
        responseType: 'token id_token',
        audience: 'https://cloud-apis.be',
        redirectUri: 'http://localhost:8100/#/callback',
        scope: 'openid'
    });

    public access_token: string;

    constructor() {
        this.access_token = localStorage.getItem('access_token');
    }

    public login(): void {
        this.auth0.authorize();
    }

    public setSessionManually() {
        let URL = document.URL;
        let queries = URL.split('#')[1].split('&');

        localStorage.setItem('access_token', queries[0].split('=')[1]);
        localStorage.setItem('expires_at', JSON.stringify((parseInt(queries[1].split('=')[1]) * 1000) + new Date().getTime()));
        localStorage.setItem('token_type', queries[2].split('=')[1]);
        localStorage.setItem('state', queries[3].split('=')[1]);
        localStorage.setItem('id_token', queries[4].split('=')[1]);

        location.replace("http://localhost:8100/#/");

        this.access_token = localStorage.getItem('access_token');
    }

    private setSession(authResult): void {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('state');
        localStorage.removeItem('token_type');
        // Go back to the home route
        // this.navCtrl.push('page-home')
    }

    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    }



}