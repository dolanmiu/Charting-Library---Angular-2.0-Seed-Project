import {Component, Output, EventEmitter} from '@angular/core'
import {TitlecasePipe} from '../pipes/title.case.pipe'

declare var CIQ: any;

@Component({
  selector: 'drawing-toolbar',
  styleUrls:['../css/CIQ_Seed.css'],
  templateUrl: './drawing.toolbar.component.html',
  providers:[TitlecasePipe]
})

export class DrawingToolbar{
  ciq:any;
  activeOutput:any={};
  drawingToolsMap:any;
  drawingTools:any=[];
  open:boolean=false;
  selectedTool:any;
  toolParams:any;
  fillColor:any;
  lineColor:any;
  lineWidth:any;
  pattern:any;
  selectedLineClass:any;
  @Output() launchToolbar=new EventEmitter<any>();
  @Output() launchColorpickerEvent=new EventEmitter<any>();

  constructor(){
    this.drawingToolsMap=CIQ.Drawing.getDrawingToolList({});
    console.log(this.drawingToolsMap);
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
    if(!this.open){
      this.selectedTool=false;
      this.toolParams=false;
      this.fillColor=false;
      this.lineColor=false;
      this.lineWidth=false;
      this.pattern=false;
      this.ciq.changeVectorType('');
    }
    var elem = document.getElementById("chartContainer");
    if(this.open)
      elem.className += " toolbarOn";
    else elem.classList.remove("toolbarOn");
    this.ciq.draw();
  }

  setTool(tool){
    // Set all the info for the toolbar
    this.selectedTool=TitlecasePipe.prototype.transform(tool);
    this.toolParams = CIQ.Drawing.getDrawingParameters(this.ciq, tool);
    console.log(this.toolParams);
    this.fillColor=this.toolParams.fillColor;
    if(this.toolParams.color=="auto") this.lineColor="white";
    else this.lineColor=this.toolParams.color;
    this.lineWidth=this.toolParams.lineWidth;
    this.pattern=this.toolParams.pattern;
    if(this.lineWidth && this.pattern)
      this.selectedLineClass='ciq-' + this.pattern + '-' + this.lineWidth;
    // Activate the tool
    this.ciq.changeVectorType(tool);
  };

  launchColorpicker=function(setting, event){
    this.activeOutput['div']=event.target;
    this.launchColorpickerEvent.emit({
      swatch: event.target,
      setting:setting
    });
  };

  setColorFromPicker(params){
    if(this.activeOutput.div==params.source) {
      this.updateToolColors(params.color, params.params);
      this.activeOutput.div.style.backgroundColor=CIQ.hexToRgba('#'+params.color);
    }
  }

  updateToolColors=function(color, settings){
    if(settings=="drawingFill"){
      this.ciq.changeVectorParameter("fillColor", "#"+color);
    }
    else if(settings=="drawingLine"){
      this.ciq.changeVectorParameter("currentColor", "#"+color);
    }
  };

  setLinePattern=function(newClass, newWidth, newPattern){
    // Set the info for the toolbar menu
    this.selectedLineClass=newClass;
    // Activate the new parameters
    this.ciq.changeVectorParameter("lineWidth", newWidth);
    this.ciq.changeVectorParameter("pattern", newPattern);
  }

}
