import {Pipe} from 'angular2/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
	name: 'PeriodicityPipe'
})
export class PeriodicityPipe {
	// Transform is the new "return function(value, args)" in Angular 1.x
	transform(layout, args?) {
		console.log(layout);
		if(!layout) {return;}
		// ES6 array destructuring
		let [periodicityOptions] = args;
		return layout.filter(option => {
			for(let i of periodicityOptions) {
				console.log(i.interval == option.interval && i.period == option.periodicity);
				return i.interval == option.interval && i.period == option.periodicity;
			}
		});
	}

}