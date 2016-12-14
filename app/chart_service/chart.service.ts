declare var CIQ: any;

export class ChartService {

    attachQuoteFeed(chart): void {
        chart.attachQuoteFeed(new CIQ.QuoteFeed.Demo(), { refreshInterval: 1 })
    }   
}