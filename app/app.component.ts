import {Component} from 'angular2/core';
import {ChartUI} from './ui_component/ui.component'

@Component({
    selector: 'my-app',
    template: `
    <chart-ui></chart-ui>
    `,
    directives: [ChartUI]
})
export class AppComponent { }