import {Component, ViewChild} from 'angular2/core'
import {ChartComponent} from '../chart_component/chart.component'

declare var STX: any;

@Component({
    selector: 'chart-ui',
    templateUrl: 'app/ui_component/ui.component.html',
    directives: [ChartComponent] 
})

export class ChartUI {
    @ViewChild(ChartComponent) chartComponent: ChartComponent
    symbolInput: string;

    changeSymbol() {
        this.chartComponent.chart.newChart(this.symbolInput, this.chartComponent.sampleData);
        this.symbolInput='';
    }

}