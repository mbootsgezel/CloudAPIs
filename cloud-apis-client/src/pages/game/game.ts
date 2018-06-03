import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Game, OmdbServiceProvider } from '../../providers/omdb-service/omdb-service';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name: 'game-page'
})
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

    private game: Game;

    constructor(public navCtrl: NavController, public navParams: NavParams, private omdb: OmdbServiceProvider) {
        if(this.navParams.get('gameId')){
            var gameId = this.navParams.get('gameId');
            omdb.getMovieById(gameId).subscribe( data => {
                this.game = data;
                console.log("Succesfully got game");
                console.log(this.game);
            });
        } else {
            console.log("No gameId supplied.. returning");
            this.navCtrl.goToRoot(null);
        } 
    }

    back (){
        this.navCtrl.pop();
    }

}
