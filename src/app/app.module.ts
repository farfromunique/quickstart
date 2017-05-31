import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostCampaignReportComponent } from "./post-campaign.report.component";

@NgModule({
	imports: [BrowserModule, HttpModule],

	declarations: [PostCampaignReportComponent],
	bootstrap: [PostCampaignReportComponent]
})
export class AppModule { }
