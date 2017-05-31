import { Benchmark } from "./benchmark";
import { Campaign } from "./campaign";
import { Summary } from "./summary";


export class Report {
	public benchmark: Benchmark;
	constructor(
		public start: string,
		public stop: string,
		public created: string,
		public summary: Summary,
		public campaign: Campaign
	) { }
}
