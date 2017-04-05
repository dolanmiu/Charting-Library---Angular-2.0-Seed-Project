import {Component, Output, EventEmitter} from '@angular/core'

declare var CIQ: any;

@Component({
  selector: 'drawing-toolbar',
  styleUrls:['../css/CIQ_Seed.css'],
  templateUrl: './drawing.toolbar.component.html',
})

export class DrawingToolbar{
  ciq:any;
  drawingToolsMap:any;
  drawingTools:any=[];
  open:boolean=false;
  @Output() launchToolbar=new EventEmitter<any>();

  constructor(){
    this.drawingToolsMap=CIQ.Drawing.getDrawingToolList({});
    //sort the tools
    for(let i in this.drawingToolsMap){
      this.drawingTools.push(this.drawingToolsMap[i]);
    }
    this.drawingTools.sort(function(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      // must be equal
      return 0;
    });
  }

  toggleDrawingToolbar(chart){
    if(chart) this.ciq=chart;
    this.launchToolbar.emit(!this.open);
    this.open=!this.open;
  }

  setTool(tool){

  };

}
