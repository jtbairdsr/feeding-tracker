import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import * as moment           from 'moment';

@Component({
	selector: 'gavage',
	templateUrl: 'gavage.component.html',
	styleUrls: ['gavage.component.css'],
})
export class GavageComponent implements OnInit {
	public feeding: any;
	public volumeNeeded: number;
	public primerVolume: number;
	public timeEstimate: string;
	public pump: boolean;

	constructor(private router: Router) { }

	ngOnInit() {
		// TODO: use the feeding id on the URL to get the correct feeding from the server
		this.feeding = {
			_id: 'update-this-with-the-feeding-id',
			iron: false,
			thickening: false,
			goalVolume: 62, // TODO: get feeding goalVolume from settings
			oral: {},
			gavage: {},
			prune: {
				administered: true,
				volume: 5
				// administered: false
			}
		}

		this.feeding.oral = this.feeding.oral || {}; // add an empty oral object if it doesn't already exist
		this.volumeNeeded = this.feeding.goalVolume - (this.feeding.oral.volume || 0);
		this.primerVolume = 12; // TODO: get this from the server
		this.timeEstimate = 'set rate';
	}

	public estimateTime(): void {
		let volume = this.volumeNeeded;
		if (this.feeding.prune.administered) {
			volume += this.feeding.prune.volume;
		}
		let hours = volume / this.feeding.gavage.rate;
		this.timeEstimate = hours ? moment().add(hours, 'hours').format('h:mm a') : 'set rate';
	}

	public start(): void {
		// TODO: save updated feeding before navigating.
		if (this.pump) {
			this.router.navigate([`/feeding/gavage/${this.feeding._id}/finish`]);
		} else {
			this.router.navigate(['/']);
		}
	}
}
