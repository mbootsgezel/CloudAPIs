import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { OmdbServiceProvider, Movie } from '../../providers/omdb-service/omdb-service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MovieComponent } from '../../components/movie/movie';
import { MoviePage } from '../movie/movie';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
@IonicPage({
    name: 'home'
})
export class HomePage {

    private movies: Movie[];
    private search: FormGroup;

    private resultSize = 0;
    private page = 1;

    private backDisabled = true;
    private nextDisabled = true;

    public MoviePage: MoviePage;

    constructor(public navCtrl: NavController, private omdb: OmdbServiceProvider, private formBuilder: FormBuilder) {
        this.search = this.formBuilder.group({
            movieName: ['']
        })
    }

    searchMovie() {
        this.page = 1;
        this.switchPage();
    }

    switchPage() {

        this.omdb.getMoviesByName(this.search.value.movieName, this.page).subscribe(data => {
            this.movies = data.Search;
            this.resultSize = parseInt(data.totalResults);

            this.backDisabled = this.page <= 1 ? true : false;
            this.nextDisabled = this.page * 10 > this.resultSize ? true : false;
        }, failed => {
            console.log(failed);
        });

    }

    prevPage() {
        this.page--;
        this.switchPage();
    }

    nextPage() {
        this.page++;
        this.switchPage();
    }
}
