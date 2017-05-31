import { Component } from '@angular/core';

import { Benchmark } from "./benchmark";
import { Summary } from "./summary";
import { Report } from "./report";
import { Campaign } from "./campaign";
import { Email } from "./email";
import { ClickthroughLink } from "./clickthroughlink";

import { ReportDataService } from "./report-data-mock.service";

@Component({
	selector: 'my-app',
	templateUrl: './post-campaign.report.component.html',
	styleUrls: [
		'./post-campaign.report.component.css',
	],
	providers: [
		ReportDataService
	]
})

export class PostCampaignReportComponent {
	report = new Report(
		'earlier',
		'later',
		'before that',
		new Campaign(
			'PCR Test',
			'BG',
			'Region',
			[
				new Email(
					'Email 1',
					'Subject',
					'1 May 2017 8:14 AM',
					100,
					99,
					95,
					65,
					30,
					35,
					3,
					4,
					2,
					1,
					0,
					1,
					1,
					85,
					40,
					1,
					[
						new ClickthroughLink(
							'url',
							10,
							8
						)
					],
					'litmus'
				)
			],
			[
				{
					short_name: 'Elevate care',
					long_name: 'Elevate care for moms on the move',
					url: 'http://www.2.forms.healthcare.philips.com/LP=421',
					land: 10,
					visitors: 9,
					visits: 11,
					em_visits: 10,
					em_visitors: 4,
					bounce: 0.5,
					em_bounce: 1,
					u_submits: 0,
				}
			]
		)
	);
	constructor(
		private reportDataService: ReportDataService
	) {
		this.setBenchmark();
	}
	getPercentToBenchmark(metric: string): number {
		return ((this.report.campaign[metric] - this.report.benchmark[metric]) / this.report.benchmark[metric]);
	};
	setBenchmark() {
		this.reportDataService.getBenchmark().subscribe(
			benchmark => this.report.benchmark = benchmark
		);
	}
}
