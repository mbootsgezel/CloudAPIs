import { Component, Input } from '@angular/core';
import { Movie, OmdbServiceProvider } from '../../providers/omdb-service/omdb-service';

/**
 * Generated class for the MovieComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'movie',
    templateUrl: 'movie.html'
})
export class MovieComponent {

    @Input() movieId: string;
    @Input() movieName: string;

    private movie: Movie;
    private movies: Movie[];

    constructor(private omdb: OmdbServiceProvider) {
        omdb.getMovies().subscribe(data => {
            this.movie = data;
        })
    }

    ngOnInit() {
        console.log(this.movieId);
        console.log(this.movieName);
        if (this.movieId) {
            this.omdb.getMovieById(this.movieId).subscribe(data => {
                this.movie = data;
            });
        } else if (this.movieName) {
            this.omdb.getMovieByName(this.movieName).subscribe(data => {
                this.movie = data;
            });
        } else {
            console.log("No movies found..");
        }
    }

}
