import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OmdbServiceProvider, Movie } from '../../providers/omdb-service/omdb-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    private movies: Movie[];

  constructor(public navCtrl: NavController, private omdb: OmdbServiceProvider) { 
    // omdb.getMovies().subscribe(data => {
    //     // this.movies = data;
    //     console.log(data);
    // })
  }

  ionViewDidLoad() {
    this.omdb.getFirstMovie().subscribe( data => {
      console.log(data.Title);
    });
  }

}
