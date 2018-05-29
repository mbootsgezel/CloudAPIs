import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { List } from 'ionic-angular';

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
        return this.http.get<Movie>(this.baseUrl + "&i=" + movieId);
    }

    getMovieByName(movieName: string): Observable<Movie> {
        return this.http.get<Movie>(this.baseUrl + "&t=" + movieName.replace(' ', '+'));
    }

    getMoviesByName(movieName: string, page: number): Observable<SearchObject> {
        return this.http.get<SearchObject>(this.baseUrl + "&s=" + movieName.toString().replace(' ', '+') + "&page=" + page);
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

export interface Search {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface SearchObject {
    Search: Movie[];
    totalResults: string;
    Response: string;
}

