import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'oral-wrap-up',
	templateUrl: 'wrap-up.component.html',
	styleUrls: ['wrap-up.component.css'],
})
export class WrapUpComponent implements OnInit {
	// TODO: consume a feeding interface
	public feeding: any;
	public ironNeeded: boolean;
	public mls: any[];

	constructor(private router: Router) { }

	ngOnInit() {
		// TODO: get feeding from the server based on the id in the url
		this.feeding = {
			_id: 'update-this-with-the-feeding-id',
			iron: false,
			thickening: true,
			goalVolume: 62,
			oral: {
				startTime: new Date(),
				endTime: new Date()
			},
			prune: {
				administered: false
			}
		}
		this.mls = [];
		for (let i = this.feeding.goalVolume; i > 0; i--) {
			this.mls.push({ value: i, label: `${i} mL` });
		}
		// TODO: this needs to be queried from the server (if no feeding has included iron today, then it is needed)
		this.ironNeeded = true;
	}

	private finish(): void {

	}

	private startGavage(): void {

	}

	private done(): void {

	}

	public addPrunes(): void {
		this.router.navigate([`/feeding/oral/${this.feeding._id}/prunes`])
	}
}
