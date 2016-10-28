import {Component} from 'angular2/core';
import {ChartUI} from './ui.component'

@Component({
    selector: 'my-app',
    template: `<h1>ChartIQ Angular 2 Example</h1>
    <chart-ui></chart-ui>
    `,
    directives: [ChartUI]
})
export class AppComponent { }