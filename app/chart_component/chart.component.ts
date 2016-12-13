import {Component, OnInit} from 'angular2/core'
import {ChartService} from '../chart_service/chart.service'

declare var STXChart: any;
declare var STX: any;
declare var $$$: any;

@Component({
    selector: 'chart',
    styleUrls: ['app/chart_component/chart.component.css'],
    templateUrl: 'app/chart_component/chart.component.html',
    providers: [ChartService]
})
export class ChartComponent implements OnInit {
    chart: any;
    sampleData: any[];

    constructor(private chartService: ChartService) { };

    ngOnInit() {
        this.chart = new STXChart({ container: $$$("#chartContainer")});
        this.chart.setPeriodicityV2(1, 5);
        this.chartService.attachQuoteFeed(this.chart);
        this.chart.newChart("IBM");
    }
    getLayout() {
    	return this.chart.layout;
    }
}