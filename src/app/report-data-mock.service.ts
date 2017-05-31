import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Benchmark } from "./benchmark";

@Injectable()
export class ReportDataService {

	private dataUrl = '../data/b2b.benchmark.json';  // URL to web api

	constructor(private http: Http) { }

	getBenchmark(): Observable<Benchmark> {
		return this.http.get(this.dataUrl)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || {};
	}
	/*

		getHero(id: number): Promise<Hero> {
			const url = `${this.dataUrl}/${id}`;
			return this.http.get(url)
				.toPromise()
				.then(response => response.json().data as Hero)
				.catch(this.handleError);
		}

		delete(id: number): Promise<void> {
			const url = `${this.dataUrl}/${id}`;
			return this.http.delete(url, { headers: this.headers })
				.toPromise()
				.then(() => null)
				.catch(this.handleError);
		}

		create(name: string): Promise<Hero> {
			return this.http
				.post(this.dataUrl, JSON.stringify({ name: name }), { headers: this.headers })
				.toPromise()
				.then(res => res.json().data as Hero)
				.catch(this.handleError);
		}

		update(hero: Hero): Promise<Hero> {
			const url = `${this.dataUrl}/${hero.id}`;
			return this.http
				.put(url, JSON.stringify(hero), { headers: this.headers })
				.toPromise()
				.then(() => hero)
				.catch(this.handleError);
		}
	*/
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}
