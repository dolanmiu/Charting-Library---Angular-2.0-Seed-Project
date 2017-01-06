import {Component, NgZone, Output, EventEmitter} from 'angular2/core'

declare var CIQ: any;

@Component({
	selector: 'timezone-dialog',
	styleUrls:['app/timezone_dialog_component/timezone.dialog.component.css'],
	templateUrl: 'app/timezone_dialog_component/timezone.dialog.component.html',
})

export class TimezoneDialog{
	ciq:any;
	timezoneMap:any;
	timezones:any=[];
	@Output() launchDialog=new EventEmitter<any>();

	constructor(){
		this.timezoneMap=CIQ.timeZoneMap;
	}

	launchTimezoneDialog(chart){
		for(let i in this.timezoneMap){
			this.timezones.push(this.timezoneMap[i]);
		}
		this.ciq=chart;
		this.launchDialog.emit(true);
	}

	setTimezone(zone){
		this.ciq.setTimeZone(this.ciq.dataZone, zone);
		if(this.ciq.chart.symbol) this.ciq.draw();
		this.launchDialog.emit(false);
	};
}