import { Component, Input } from '@angular/core';
import { Title, OmdbServiceProvider } from '../../providers/omdb-service/omdb-service';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the TitleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'title-component',
    templateUrl: 'title.html'
})
export class TitleComponent {

    @Input() titleId: string;
    @Input() titleName: string;
    @Input() Title: Title;

    private title: Title;

    constructor(private navCtrl: NavController, private omdb: OmdbServiceProvider) {

    }

    ngOnInit() {
        if (this.Title) {
            this.title = this.Title;
        } else if (this.titleId) {
            this.omdb.getTitleById(this.titleId).subscribe(data => {
                this.title = data;
            });
        } else if (this.titleName) {
            this.omdb.getTitleByName(this.titleName).subscribe(data => {
                this.title = data;
            });
        } else {
            console.log("No movies found..");
        }
    }

    openDetailedTitle() {
        let type = this.title.Type;
        switch (type) {
            case 'game':

                break;
            case 'series':

                break;
            default:
            case 'movie':
                this.navCtrl.push('movie', {
                    movieId: this.title.imdbID
                });
                break;
        }
    }
}
