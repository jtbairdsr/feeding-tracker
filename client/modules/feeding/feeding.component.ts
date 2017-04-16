import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

// TODO: remove this interface when I start using the reducer (make sure it gets moved to the reducer)
interface Feeding {
	_id?: string;
	goalVolume: number;        //  mL
	iron: boolean;
	thickening: boolean;
	oral?: {
		startTime: Date;
		endTime?: Date;
		volume?: number;       //  mL
	};
	gavage?: {
		startVolume: number;   //  mL
		endVolume?: number;    //  mL
		rate: number;          //  mL/hr
		neededVolume: number;  //  mL
	};
	prune: {
		administered: boolean;
		volume?: number;       //  mL
	};
}

@Component({
	selector: 'feeding',
	templateUrl: 'feeding.component.html',
	styleUrls: ['feeding.component.css']
})
export class FeedingComponent implements OnInit {

	public feeding: Feeding;

	constructor(private router: Router) { }

	ngOnInit() {
		this.feeding = {
			iron: false,
			thickening: false,
			// TODO: get feeding goalVolume from settings
			goalVolume: 62,
			prune: {
				administered: false
			}
		}
	}

	public startFeeding(type: string): void {
		// TODO: write feeding to database and append it's id to the timer url
		this.feeding._id = 'update-this-with-the-feeding-id';
		switch (type) {
			case 'oral':
				this.router.navigate(['/feeding/oral', this.feeding._id])
				break;
			case 'gavage':
				this.router.navigate(['/feeding/gavage', this.feeding._id])
				break;
		}
	}
}
