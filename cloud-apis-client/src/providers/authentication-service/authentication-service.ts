import { Injectable, NgZone } from '@angular/core';

import Auth0Cordova from '@auth0/cordova';
import Auth0 from 'auth0-js';

const auth0Config = {
    // needed for auth0
    clientID: "slCG2do2YP8LB2GqMCO3dEERYXAp2wyE",

    // needed for auth0cordova
    clientId: "slCG2do2YP8LB2GqMCO3dEERYXAp2wyE",
    domain: "spub.eu.auth0.com",
    callbackURL: location.href,
    packageIdentifier: 'be.cloud-apis.api'
};

@Injectable()
export class AuthenticationServiceProvider {
    auth0 = new Auth0.WebAuth({
        clientID: 'PjHyG72o26fvvSmiQ3kaE3gDZyG-vp6_',
        domain: 'spub.eu.auth0.com',
        responseType: 'token id_token',
        audience: 'https://spub.eu.auth0.com/userinfo',
        redirectUri: 'http://localhost:8100/#/callback',
        scope: 'openid'
    });

    constructor() { }

    public login(): void {
        this.auth0.authorize();
      }
    
      public handleAuthentication(): void {
        this.auth0.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            this.setSession(authResult);
            // this.navCtrl.push('api-page')
          } else if (err) {
            // this.navCtrl.push('api-page')
            console.log(err);
            alert(`Error: ${err.error}. Check the console for further details.`);
          }
        });
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