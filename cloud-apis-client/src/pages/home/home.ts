import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OmdbServiceProvider, Movie } from '../../providers/omdb-service/omdb-service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MovieComponent } from '../../components/movie/movie';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    private movies: Movie[];
    private search: FormGroup;

    private resultSize = 0;
    private page = 1;

    constructor(public navCtrl: NavController, private omdb: OmdbServiceProvider, private formBuilder: FormBuilder) {
        this.search = this.formBuilder.group({
            movieName: ['']
        })
    }

    ionViewDidLoad() {
        this.omdb.getFirstMovie().subscribe(data => {
            console.log(data.Title);
        });
    }

    searchMovie() {
        this.omdb.getMoviesByName(this.search.value.movieName, this.page).subscribe(data => {
            this.movies = data.Search;
            this.resultSize = parseInt(data.totalResults);
            console.log(this.movies.length);
            console.log(this.resultSize);
        })
    }
}
