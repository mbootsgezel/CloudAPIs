import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Game, OmdbServiceProvider, Series } from '../../providers/omdb-service/omdb-service';

@IonicPage({
    name: 'series-page'
})
@Component({
    selector: 'page-series',
    templateUrl: 'series.html',
})
export class SeriesPage {

    private series: Series;

    constructor(public navCtrl: NavController, public navParams: NavParams, private omdb: OmdbServiceProvider) {
        if (this.navParams.get('seriesId')) {
            var seriesId = this.navParams.get('seriesId');
            omdb.getSeriesById(seriesId).subscribe(data => {
                this.series = data;
                console.log("Succesfully got series");
                console.log(this.series);
            });
        } else {
            console.log("No seriesId supplied.. returning");
            this.navCtrl.goToRoot(null);
        }
    }

    back() {
        this.navCtrl.pop();
    }

}