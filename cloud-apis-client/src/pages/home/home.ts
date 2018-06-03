import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { OmdbServiceProvider, Movie, Title } from '../../providers/omdb-service/omdb-service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MoviePage } from '../movie/movie';
import { GamesServiceProvider } from '../../providers/games-service/games-service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
@IonicPage({
    name: 'home'
})
export class HomePage {

    private titles: Title[];
    private search: FormGroup;

    private resultSize = 0;
    private page = 1;

    private backDisabled = true;
    private nextDisabled = true;

    public MoviePage: MoviePage;

    private typeSelect: string = "any";
    private nothingFound = false;

    constructor(public navCtrl: NavController, private omdb: OmdbServiceProvider, private formBuilder: FormBuilder, private games: GamesServiceProvider) {
        this.search = this.formBuilder.group({
            titleNameOrId: [''],
            type: ['']
        })
        // games.getGamesList().subscribe(data => {
        //     data.forEach(element => {
        //         console.log(element);
        //     });
        // })
    }

    searchTitle() {
        this.page = 1;
        this.switchPage();
    }

    switchPage() {
        var titleNameOrId: string = this.search.value.titleNameOrId;
        var type: string = this.search.value.type;

        if (titleNameOrId.substr(0, 2) == 'tt') {
            this.navCtrl.push('movie', {
                movieId: titleNameOrId
            });
        } else {
            this.omdb.getTitlesByName(titleNameOrId, type, this.page).subscribe(data => {
                this.titles = data.Search;
                this.resultSize = parseInt(data.totalResults);

                let results = document.getElementById('resultsFound');
                results.innerHTML = this.resultSize + " total results";  

                this.backDisabled = this.page <= 1 ? true : false;
                this.nextDisabled = this.page * 10 > this.resultSize ? true : false;

                this.nothingFound = this.resultSize <= 0 ? true : false;
            }, failed => {
                console.log(failed);
                this.nothingFound = true;
            });
        }




    }

    prevPage() {
        this.page--;
        this.switchPage();
    }

    nextPage() {
        this.page++;
        this.switchPage();
    }

    goToApiPage() {
        console.log("Navigating to API page");
        this.navCtrl.push("api-page");
    }
}
