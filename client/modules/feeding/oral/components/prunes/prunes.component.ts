import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'prunes',
	templateUrl: 'prunes.component.html',
	styleUrls: ['prunes.component.css'],
})
export class PrunesComponent implements OnInit {
	public mls: any[];
	public feeding: any;    // TODO: update this to consume the feeding interface
	public dayTotal: number; // TODO: get this number        from the server
	public recommendedDose: number; // TODO: get this number from the server

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
		this.dayTotal = 15;
		this.recommendedDose = 20;
		this.mls = [];
		for (let i = 10; i > 0; i--) {
			this.mls.push({ value: i, label: `${i} mL` });
		}
	}

	public cancel(): void {
		this.router.navigate([`/feeding/oral/${this.feeding._id}/wrap-up`])
	}

	public add(): void {
		this.feeding.prune.administered = true;
		// TODO: save the updated feeding before re-routing.
		this.router.navigate([`/feeding/oral/${this.feeding._id}/wrap-up`])
	}
}
