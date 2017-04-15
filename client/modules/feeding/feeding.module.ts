import { NgModule }             from '@angular/core';
import { SharedModule }         from '../shared/shared.module';
import { FeedingRoutingModule } from './feeding-routing.module';
import { MomentModule }         from 'angular2-moment';

// import your components below
import { FeedingComponent } from './feeding.component';

@NgModule({
	imports: [SharedModule, FeedingRoutingModule, MomentModule],
	declarations: [
		// List your components here
		FeedingComponent
	]
})
export class FeedingModule { }
