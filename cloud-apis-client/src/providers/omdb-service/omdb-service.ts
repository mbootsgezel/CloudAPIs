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
    }

    getTitleById(titleId: string): Observable<Title> {
        console.log("Getting movie with imdbID: " + titleId);
        let queryString = this.baseUrl;
        queryString += "&i=" + titleId;
        return this.http.get<Title>(queryString);
    }

    getTitleByName(titleName: string): Observable<Title> {
        console.log("Getting movie with name: " + titleName);
        let queryString = this.baseUrl;
        queryString += "&t=" + titleName.replace(' ', '+');
        queryString += "&type=game";
        return this.http.get<Title>(queryString);
    }

    getGameById(titleId: string): Observable<Game> {
        console.log("Getting movie with imdbID: " + titleId);
        let queryString = this.baseUrl;
        queryString += "&i=" + titleId;
        return this.http.get<Game>(queryString);
    }

    getGameByName(titleName: string): Observable<Game> {
        console.log("Getting movie with name: " + titleName);
        let queryString = this.baseUrl;
        queryString += "&t=" + titleName.replace(' ', '+');
        queryString += "&type=game";
        return this.http.get<Game>(queryString);
    }

    getMovieById(titleId: string): Observable<Movie> {
        console.log("Getting movie with imdbID: " + titleId);
        let queryString = this.baseUrl;
        queryString += "&i=" + titleId;
        return this.http.get<Movie>(queryString);
    }

    getMovieByName(titleName: string): Observable<Movie> {
        console.log("Getting movie with name: " + titleName);
        let queryString = this.baseUrl;
        queryString += "&t=" + titleName.replace(' ', '+');
        queryString += "&type=movie";
        return this.http.get<Movie>(queryString);
    }

    getSeriesById(titleId: string): Observable<Series> {
        console.log("Getting movie with imdbID: " + titleId);
        let queryString = this.baseUrl;
        queryString += "&i=" + titleId;
        return this.http.get<Series>(queryString);
    }

    getSeriesByName(titleName: string): Observable<Series> {
        console.log("Getting movie with name: " + titleName);
        let queryString = this.baseUrl;
        queryString += "&t=" + titleName.replace(' ', '+');
        queryString += "&type=series";
        return this.http.get<Series>(queryString);
    }

    getTitlesByName(titleName: string, type: string, page: number): Observable<SearchObject> {
        console.log("Getting movies with name: " + titleName);
        let queryString = this.baseUrl;
        queryString += "&s=" + titleName.toString().replace(' ', '+');
        queryString +=  "&page=" + page;
        queryString += type == "any" ? "" : "&type=" + type;
        console.log(queryString);
        return this.http.get<SearchObject>(queryString);
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

export interface Title {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface SearchObject {
    Search: Title[];
    totalResults: string;
    Response: string;
}

export interface Series {
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
export interface Game {
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