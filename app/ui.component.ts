import {Component, ViewChild} from 'angular2/core'
import {ChartComponent} from './chart.component'

declare var STX: any;

@Component({
    selector: 'chart-ui',
    template: `
<div>
<input [(ngModel)]="symbolInput">
<button (click)=changeSymbol()>Change Symbol</button>
</div>
<chart></chart>
    `,
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