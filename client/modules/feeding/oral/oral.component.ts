import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import * as moment    from 'moment';
import { Router }     from '@angular/router';

@Component({
	selector: 'oral',
	templateUrl: 'oral.component.html',
	styleUrls: ['oral.component.css']
})
export class OralComponent implements OnInit {
	public feeding: any;
	public timer: Observable<string>;

	constructor(
		private router: Router
		// private ref: ChangeDetectorRef
	) { }

	ngOnInit() {
		// TODO: use the feeding id on the URL to get the correct feeding from the server
		this.feeding = {
			oral: {
				startTime: moment()
			}
		}
		this.timer = Observable.zip(Observable.interval(1000), () => moment.utc(moment().diff(this.feeding.oral.startTime)).format("HH:mm:ss"));
	}

	public stopFeeding(): void {
		// TODO: add an endTime to the feeding.oral and save to the server.
		let feedingId = 'update-this-with-the-feeding-id';
		this.router.navigate([`/feeding/oral/${feedingId}/wrap-up`]);
	}
}
