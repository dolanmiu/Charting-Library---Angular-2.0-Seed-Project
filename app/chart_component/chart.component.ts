import {Component, OnInit} from 'angular2/core'
import {ChartService} from '../chart_service/chart.service'

declare var CIQ: any;
declare var $$$: any;

@Component({
    selector: 'chart',
    styleUrls: ['app/css/stylesheets/CIQ_Seed.css', 'app/css/stylesheets/CIQ_Demo.css'],
    templateUrl: 'app/chart_component/chart.component.html',
    providers: [ChartService]
})

export class ChartComponent implements OnInit {
    ciq: any;
    sampleData: any[];
	chartSeries:any[];

    constructor(private chartService: ChartService) {
    	this.chartSeries=[];
    };

    ngOnInit() {
        this.ciq = new CIQ.ChartEngine({ container: $$$("#chartContainer")});
        this.ciq.setPeriodicityV2(1, 5);
        var qf = this.chartService.makeFeed();
	    this.ciq.attachQuoteFeed(qf,{refreshInterval:1});
        this.ciq.newChart("IBM");
    }

    getLayout() {
    	return this.ciq.layout;
    }

    removeSeries(series){
	    var index = this.chartSeries.indexOf(series, 0);
	    if (index > -1) {
		    this.chartSeries.splice(index, 1);
	    }
	    this.ciq.removeSeries(series.display, this.ciq.ciq);
    }
}