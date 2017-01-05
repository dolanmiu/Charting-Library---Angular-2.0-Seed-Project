import {Component, ViewChild, AfterViewChecked, ChangeDetectionStrategy, NgZone} from 'angular2/core'
import {ChartComponent} from '../chart_component/chart.component'
import {StudyDialog} from '../study_dialog_component/study.dialog.component'

declare var CIQ: any;

@Component({
    selector: 'chart-ui',
	styleUrls:['app/ui_component/ui.component.css'],
    templateUrl: 'app/ui_component/ui.component.html',
	directives:[ChartComponent, StudyDialog],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ChartUI implements AfterViewChecked {
    @ViewChild(ChartComponent) chartComponent:ChartComponent;
	symbolInput:string;
	public chartLayout:any;
	periodicity:string;
	chartType:string;
	symbolComparison:string;

	studies:any={
		list:Object.keys(CIQ.Studies.studyLibrary),
		selectedOption:''
	};
	constructor(private zone: NgZone){
		this.periodicity="5 min";
		this.chartType="candle";
	}
	ngAfterViewChecked(){
		this.chartLayout=this.getChartLayout();
	}
	changeSymbol() {
		this.chartComponent.ciq.newChart(this.symbolInput, this.chartComponent.sampleData);
		this.symbolInput='';
	}
	changePeriodicity(period, interval){
		this.chartComponent.ciq.setPeriodicityV2(period,interval);
		for(let i in this.periodicityOptions){
			if(this.periodicityOptions[i].interval==this.chartLayout.interval && this.periodicityOptions[i].period==this.chartLayout.periodicity){
				this.zone.run(()=>{this.periodicity=this.periodicityOptions[i].label;});
			}
		}
	}
	changeChartType(type){
		if((type.aggregationEdit && this.chartComponent.ciq.layout.aggregationType != type.type) || type.type == 'heikinashi'){
			//ctrl.ciq.setChartType('candle');  This might make this chart type more useful for the end user
			this.chartComponent.ciq.setAggregationType(type.type);
		} else {
			this.chartComponent.ciq.setChartType(type.type);
		}
		//update the ui
		this.chartType=type.label;
	}
	toggleCrosshairs(){
		let state=this.chartComponent.ciq.layout.crosshair;
		this.chartComponent.ciq.layout.crosshair=!state;
	}
	addComparison(){
		if(this.symbolComparison) {
			// Note that this color generator has a bias toward darker colors. Just needed a quick solution here.
			function getRandomColor() {
				let letters = '0123456789ABCDEF';
				let color = '#';
				for (var i = 0; i < 6; i++) {
					color += letters[Math.floor(Math.random() * 16)];
				}
				return color;
			}
			let newSeries=this.chartComponent.ciq.addSeries(this.symbolComparison, {
				isComparison: true,
				color: getRandomColor(),
				data: {useDefaultQuoteFeed: true},
				permanent:true
			});
			//update the comparison legend
			this.chartComponent.chartSeries.push(newSeries);
			this.symbolComparison=null;
		}
		else{
			console.log("Error: no symbol for comparison entered");
		}
	}
	getChartLayout(){
		return this.chartComponent.getLayout();
	}

    private periodicityOptions: Array<any> = [
			{
				period: 1,
				interval: 1,
				label: '1 Min',
			},
			{
				period: 1,
				interval: 3,
				label: '3 Min',
			},
			{
				period: 1,
				interval: 5,
				label: '5 Min',
			},
			{
				period: 1,
				interval: 10,
				label: '10 Min',
			},
			{
				period: 3,
				interval: 5,
				label: '15 Min',
			},
			{
				period: 1,
				interval: 30,
				label: '30 Min',
			},
			{
				period: 2,
				interval: 30,
				label: '1 Hour',
			},
			{
				period: 8,
				interval: 30,
				label: '4 Hour',
			},
			{
				period: 1,
				interval:'day',
				label: '1 Day',
			},
			{
				period: 2,
				interval:'day',
				label: '2 Day',
			},
			{
				period: 3,
				interval:'day',
				label: '3 Day',
			},
			{
				period: 5,
				interval:'day',
				label: '5 Day',
			},
			{
				period: 10,
				interval:'day',
				label: '10 Day',
			},
			{
				period: 20,
				interval:'day',
				label: '20 Day',
			},
			{
				period: 1,
				interval:'week',
				label: '1 Wk',
			},
			{
				period: 1,
				interval:'month',
				label: '1 Mon',
			}
    ];

	private chartTypes: Array<any> = [
			{
				type: 'bar',
				label: 'bar',
			},
			{
				type: 'candle',
				label: 'candle',
			},
			{
				type: 'colored_bar',
				label: 'colored bar',
			},
			{
				type: 'hollow_candle',
				label: 'hollow candle',
			},
			{
				type: 'line',
				label: 'line',
			},
			{
				type: 'mountain',
				label: 'mountain',
			},
			{
				type: 'volume_candle',
				label: 'volume candle',
			},
			{
				type: 'heikinashi',
				label: 'Heikin-Ashi',
			},
			{
				type: 'kagi',
				label: 'kagi',
				aggregationEdit: {
					title: 'Set Reversal Percentage',
					inputs: [
						{
							lookup: 'kagi',
							label: 'kagi',
						}
					]
				}
			},
			{
				type: 'linebreak',
				label: 'line break',
				aggregationEdit: {
					title: 'Set Price Lines',
					inputs: [
						{
							lookup: 'priceLines',
							label: 'price line'
						}
					]
				}
			},
			{
				type: 'renko',
				label: 'renko',
				aggregationEdit: {
					title: 'Set Range',
					inputs: [
						{
							lookup: 'renko',
							label: 'renko'
						}
					]
				}
			},
			{
				type: 'rangebars',
				label: 'range bars',
				aggregationEdit: {
					title: 'Set Range',
					inputs: [
						{
							lookup: 'range',
							label: 'range'
						}
					]
				}
			},
			{
				type: 'pandf',
				label: 'point & figure',
				aggregationEdit: {
					title: 'Set Point & Figure Parameters',
					inputs: [
						{
							lookup: 'pandf.box',
							label: 'box'
						},
						{
							lookup: 'pandf.reversal',
							label: 'reversal'
						}
					]
				}
			}
		];

}