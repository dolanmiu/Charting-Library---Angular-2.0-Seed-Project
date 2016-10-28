declare var STX: any;

export class ChartService {

    attachQuoteFeed(chart): void {
        chart.attachQuoteFeed(new STX.QuoteFeed.Demo(), { refreshInterval: 1 })
    }   
}