import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the GamesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GamesServiceProvider {

    private baseUrl = "http://localhost:5000/api/";

    constructor(public http: HttpClient) {

    }

    getGamesList(): Observable<Game[]> {
       console.log("Getting list of games");
        let queryString = this.baseUrl;
        queryString += "/games";
        return this.http.get<Game[]>(queryString);
    }

}

export interface Publisher {
    id: number;
    publisherName: string;
}

export interface Game {
    id: number;
    title: string;
    publisher: Publisher;
}




