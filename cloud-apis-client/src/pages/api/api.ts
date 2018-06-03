import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationServiceProvider } from '../../providers/authentication-service/authentication-service';
import { Game, GamesServiceProvider, Publisher } from '../../providers/games-service/games-service';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    private newGame: FormGroup;

    private publisher;

    private gameList: Array<Game>;
    private publisherList: Array<Publisher>;

    constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthenticationServiceProvider, private games: GamesServiceProvider, private formBuilder: FormBuilder) {
        this.newGame = this.formBuilder.group({
            title: [''],
            publisher: ['']
        })
    }

    ionViewWillEnter() {
        if (!this.auth.isAuthenticated()) {
            this.auth.login();
        }
    }
    ionViewDidLoad() {
        this.games.getGamesList().subscribe(data => {
            this.gameList = data;
        })
        this.games.getPublisherList().subscribe(data => {
            this.publisherList = data;
        })
    }

    addGame() {
        let title = this.newGame.value.title;
        let publisherId = this.newGame.value.publisher;
        this.games.addGame({
            title, publisherId
        });
    }

    goBackToHomePage() {
        this.navCtrl.pop();
    }

    logout() {
        this.auth.logout();
        this.navCtrl.pop();
    }

}
