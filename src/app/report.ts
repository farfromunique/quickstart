import { Benchmark } from "./benchmark";
import { Campaign } from "./campaign";
import { Summary } from "./summary";


export class Report {
	public benchmark: Benchmark;
	public summary: Summary;
	constructor(
		public start: string,
		public stop: string,
		public created: string,
		public campaign: Campaign
	) { }
	setSummaryFromEmails() {
		let sends = 0;
		let clicks = 0;
		let u_clicks = 0;
		let hardbounces = 0;
		let u_submits = 0;
		this.summary.delivered = 0;
		this.summary.opened = 0;
		this.summary.u_opened = 0;

		this.campaign.emails.forEach((em) => {
			this.summary.delivered += em.delivers;
			this.summary.opened += em.opens;
			this.summary.u_opened += em.u_opens;
			sends += em.sends;
			clicks += em.clicks;
			u_clicks += em.u_clicks;
			hardbounces += em.hard_bounces;
			u_submits += em.u_submits
		})

		this.summary.uor = this.summary.u_opened / this.summary.delivered;
		this.summary.ctor = clicks / this.summary.u_opened;
		this.summary.ctr = clicks / this.summary.delivered;
		this.summary.hbr = hardbounces / sends;
		this.summary.uctr = u_clicks / this.summary.delivered;
		this.summary.ufcr = u_submits / this.summary.delivered;
	}
}
