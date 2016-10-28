import {Component} from 'angular2/core'
import {ChartService} from './chart.service'

declare var STXChart: any;
declare var STX: any;
declare var $$$: any;

@Component({
    selector: 'chart',
    styles: [`
    #chartContainer{
	margin:0 auto;
	width:800px;
	height:500px;
	position:relative;
    }
`],
    template: '<div id="chartContainer"></div>',
    providers: [ChartService]
})
export class ChartComponent {
    chart: any;
    sampleData: any[];

    constructor(private chartService: ChartService) { };

    ngAfterViewInit() {
        this.chart = new STXChart({ container: $$$("#chartContainer")});
        this.chart.setPeriodicityV2(1, 5);
        this.chartService.attachQuoteFeed(this.chart);
        this.chart.newChart("IBM");
    }

}