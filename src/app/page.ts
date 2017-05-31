export class Page {
	constructor(
		public short_name: string,
		public long_name: string,
		public url: string,
		public land: number,
		public visitors: number,
		public visits: number,
		public em_visits: number,
		public em_visitors: number,
		public bounce: number,
		public em_bounce: number,
		public u_submits: number
	) { }
}
