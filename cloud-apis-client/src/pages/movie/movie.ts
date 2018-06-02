import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Movie, OmdbServiceProvider } from '../../providers/omdb-service/omdb-service';
import { URLSearchParams } from "@angular/http";

/**
 * Generated class for the MoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name: 'movie-page'
})
@Component({
    selector: 'page-movie',
    templateUrl: 'movie.html',
})
export class MoviePage {

    private movie: Movie;

    constructor(public navCtrl: NavController, public navParams: NavParams, private omdb: OmdbServiceProvider) {
        if(this.navParams.get('movieId')){
            var movieId = this.navParams.get('movieId');
            omdb.getMovieById(movieId).subscribe( data => {
                this.movie = data;
                console.log("Succesfully got movie");
                console.log(this.movie);
            });
        } else {
            console.log("No movieId supplied.. returning");
            this.navCtrl.goToRoot(null);
        } 
    }

    back (){
        this.navCtrl.pop();
    }

}
