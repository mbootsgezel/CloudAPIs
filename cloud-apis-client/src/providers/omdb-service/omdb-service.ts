import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the OmdbServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OmdbServiceProvider {

    private baseUrl = "http://www.omdbapi.com/?apikey=202fb065";

    constructor(public http: HttpClient) {
        console.log('Hello OmdbServiceProvider Provider');
    }

    getFirstMovie(): Observable<Movie> {
        return this.http.get<Movie>(this.baseUrl);
    }

    getMovieById(movieId: string): Observable<Movie> {
        console.log("Getting movie by ID: " + movieId);
        return this.http.get<Movie>(this.baseUrl + "&i=" + movieId);
    }

    getMovieByName(movieName: string): Observable<Movie> {
        console.log("Getting movie by name: " + movieName);
        return this.http.get<Movie>(this.baseUrl + "&t=" + movieName.replace(' ', '+'));
    }
    
    getMovies():Observable<Movie[]> {
        return this.http.get<Movie[]>(this.baseUrl + "&y=2018");
    }
}

export interface Rating {
    Source: string;
    Value: string;
}

export interface Movie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}
