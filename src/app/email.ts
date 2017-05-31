import { ClickthroughLink } from "./clickthroughlink";

export class Email {
	constructor(
		public name: string,
		public subject: string,
		public scheduled: string,
		public sends: number,
		public delivers: number,
		public opens: number,
		public clicks: number,
		public ev_clicks: number,
		public nv_clicks: number,
		public submits: number,
		public forwards: number,
		public forwarders: number,
		public bounces: number,
		public hard_bounces: number,
		public soft_bounces: number,
		public unsubscribes: number,
		public u_opens: number,
		public u_clicks: number,
		public u_submits: number,
		public ct_links: ClickthroughLink[],
		public litmus: string
	) { }
	getRate(metric: string, em_id: number): number {
		let ret = 0;
		switch (metric.toLowerCase()) {
			case 'or':
				ret = this.opens / this.delivers;
				break;

			case 'uor':
				ret = this.u_opens / this.delivers;
				break;

			case 'ctr':
				ret = this.clicks / this.delivers;
				break;

			case 'uctr':
				ret = this.u_clicks / this.delivers;
				break;

			case 'ctor':
				ret = this.u_clicks / this.u_opens;
				break;

			case 'ufsr':
				ret = this.u_submits / this.delivers;
				break;

			default:
				break;
		}

		return ret;
	}
}
