import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
	selector: 'finish',
	templateUrl: 'finish.component.html',
	styleUrls: ['finish.component.css']
})
export class FinishComponent implements OnInit {
	public feeding: any; //TODO: consume the feeding interface
	public volumeNeeded: number;
	public pumpedVolume: string;

	constructor(private router: Router) { }

	ngOnInit() {
		this.feeding = {
			_id: 'update-this-with-the-feeding-id',
			iron: false,
			thickening: false,
			goalVolume: 62, // TODO: get feeding goalVolume from settings
			oral: {
				volume: 20
			},
			gavage: {
				startVolume: 363,
				rate: 60
			}
		}
		this.volumeNeeded = this.feeding.goalVolume - (this.feeding.oral.volume || 0);
		this.updateTotal();
	}

	public updateTotal(): void {
		this.pumpedVolume = this.feeding.gavage.endVolume ? `${this.feeding.gavage.endVolume - this.feeding.gavage.startVolume} mL` : '...';
	}

	public finish(): void {
		// TODO: save updated feeding before navigating.
		this.router.navigate(['/']);
	}
}
