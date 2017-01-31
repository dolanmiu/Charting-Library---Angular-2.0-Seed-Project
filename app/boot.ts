import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

declare let require: any;
declare let define: any;

// Configure requirejs. Otherwise the baseUrl would default to this directory
// TODO change baseUrl to match where your ChartIQ js folder is located. This is how require.js knows where to start looking.
require.config({
	baseUrl: 'chartiq_library/js/',
});

// Define the AMD module for the library
// ['chartiq'] refers to chartiq.js in the ChartIQ library. Requiring this file kicks off require.js and grabs everything that is needed from the library.
define('chartIQ', ['chartiq'], function (chartiq) {
	for (var key in chartiq) {
		window[key] = chartiq[key];
	}
	return chartiq;
});

//Bootstrap the app after the required library is loaded
require(['chartIQ'], function() {
	bootstrap(AppComponent);
});