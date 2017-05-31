import { Email } from "./email";
import { Page } from "./page";

export class Campaign {
	delivers: number;
	opens: number;
	u_opens: number;
	uor: number;
	ctr: number;
	uctr: number;
	ctor: number;
	ufcr: number;
	hbr: number;
	ur: number;
	constructor(
		public name: string,
		public businessgroup: string,
		public region: string,
		public emails: Email[],
		public pages: Page[],
	) {
		this.emails.forEach(em => {
			this.opens += em.opens;
			this.delivers += em.delivers;
			this.u_opens += em.u_opens;
			this.ctor = this.getRate('ctor');
			this.ctr = this.getRate('ctr');
			this.hbr = this.getRate('hbr');
		});
	}
	getRate(metric: string): number {
		let ret = 0;
		let opens = 0;
		let uopens = 0;
		let clicks = 0;
		let uclicks = 0;
		let sends = 0;
		let delivers = 0;
		let bounces = 0;
		let hbounces = 0;
		let sbounces = 0;
		let usubmits = 0;

		switch (metric.toLowerCase()) {
			case 'or':
				this.emails.forEach(em => {
					opens += em.opens;
					delivers += em.delivers;
				});
				ret = opens / delivers;
				break;

			case 'uor':
				this.emails.forEach(em => {
					uopens += em.u_opens;
					delivers += em.delivers;
				});
				ret = uopens / delivers;
				break;

			case 'ctr':
				this.emails.forEach(em => {
					clicks += em.clicks;
					delivers += em.delivers;
				});
				ret = clicks / delivers;
				break;

			case 'uctr':
				this.emails.forEach(em => {
					uclicks += em.clicks;
					delivers += em.delivers;
				});
				ret = uclicks / delivers;
				break;

			case 'ctor':
				this.emails.forEach(em => {
					uclicks += em.clicks;
					opens += em.opens;
				});
				ret = uclicks / opens;
				break;

			case 'ufsr':
				this.emails.forEach(em => {
					usubmits += em.u_submits;
					delivers += em.delivers;
				});
				ret = usubmits / delivers;
				break;

			case 'bbr':
				this.emails.forEach(em => {
					bounces += em.bounces
					sends += em.sends;
				});
				ret = bounces / sends;
				break;

			case 'hbr':
				this.emails.forEach(em => {
					hbounces += em.hard_bounces;
					sends += em.sends;
				});
				ret = hbounces / sends;
				break;

			case 'sbr':
				this.emails.forEach(em => {
					sbounces += em.soft_bounces
					sends += em.sends;
				});
				ret = sbounces / sends;
				break;

			default:
				break;
		}

		return ret;
	}
}
