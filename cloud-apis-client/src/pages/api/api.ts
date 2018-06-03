import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationServiceProvider } from '../../providers/authentication-service/authentication-service';

/**
 * Generated class for the ApiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name: "api-page"
})
@Component({
    selector: 'page-api',
    templateUrl: 'api.html',
})
export class ApiPage {

    private user: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthenticationServiceProvider) {
    }

    ionViewWillEnter(){
        if(!this.auth.isAuthenticated()){
            this.auth.login();
        }
    }
    ionViewDidLoad() {
        // this.loadProfile();


    }

    goBackToHomePage() {
        this.navCtrl.pop();
    }

    logout() {
        this.auth.logout();
        this.navCtrl.pop();
    }

}
