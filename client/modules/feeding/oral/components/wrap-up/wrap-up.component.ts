import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
	selector: 'oral-wrap-up',
	templateUrl: 'wrap-up.component.html',
	styleUrls: ['wrap-up.component.css'],
	// changeDetection: ChangeDetectionStrategy.OnPush
})

// Change detection default will wastefully check if each component in the component tree has changed.
// It is better to inform the change detection service manually

export class WrapUpComponent implements OnInit {
	// TODO: consume a feeding interface
	public feeding: any;
	public ironNeeded: boolean;
	public mls: any[];

	constructor(
		// private ref: ChangeDetectorRef
	) { }

	ngOnInit() {
		this.feeding = {
			iron: false,
			thickening: true,
			// TODO: get feeding goalVolume from settings
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
			this.mls.push({ value: i, label: `${i} mL${i > 1 ? 's' : ''}` });
		}
		// TODO: this needs to be queried from the server (if no feeding has included iron today, then it is needed)
		// this.ironNeeded = true;
	}

	private finish(): void {

	}

	private startGavage(): void {

	}

	private done(): void {

	}
}
