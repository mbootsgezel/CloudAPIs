import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AuthenticationServiceProvider } from '../authentication-service/authentication-service';

/*
  Generated class for the GamesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GamesServiceProvider {

    private baseUrl = "http://localhost:5000/api/";

    private publishers: Publisher[];

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.auth.access_token}`
        })
    }

    constructor(public http: HttpClient, private auth: AuthenticationServiceProvider) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'Authorization': 'Bearer ' + this.auth.access_token
            })
        }
    }

    getGamesList(): Observable<Game[]> {
        console.log("Getting list of games");
        let queryString = this.baseUrl;
        queryString += "games";
        queryString += "?pagesize=50";

        return this.http.get<Game[]>(queryString, this.httpOptions);
    }

    getPublisherList(): Observable<Publisher[]> {
        let queryString = this.baseUrl;
        queryString += "publishers";

        return this.http.get<Publisher[]>(queryString, this.httpOptions);
    }

    addGame(formData: any) {
        let queryString = this.baseUrl;
        queryString += "games";

        let data = {
            Title: formData.title,
            PublisherId: formData.publisherId
        }

        this.http.post(queryString, data, this.httpOptions).subscribe(data => {
            console.log(data);

            this.getGamesList();
        });
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




