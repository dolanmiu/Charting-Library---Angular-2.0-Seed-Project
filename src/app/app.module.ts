import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ChartComponent } from './chart_component/chart.component';
import { ChartService } from './chart_service/chart.service';
import { ChartUI } from './ui_component/ui.component';
import { Colorpicker } from './colorpicker_component/colorpicker';
import { FilterByPropertyPipe } from './pipes/property.filter.pipe';
import { StudyDialog } from './study_dialog_component/study.dialog.component';
import { ThemeDialog } from './theme_dialog_component/theme.dialog.component';
import { TimezoneDialog } from './timezone_dialog_component/timezone.dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ChartUI,
    Colorpicker,
    FilterByPropertyPipe,
    StudyDialog,
    ThemeDialog,
    TimezoneDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    ChartService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
