import { NgModule }             from '@angular/core';
import { SharedModule }         from '../shared/shared.module';
import { FeedingRoutingModule } from './feeding-routing.module';
import { MomentModule }         from 'angular2-moment';

// import your components below
import { FeedingComponent } from './feeding.component';
import { TimerComponent }    from './components/timer/timer.component';

@NgModule({
	imports: [SharedModule, FeedingRoutingModule, MomentModule],
	declarations: [
		// List your components here
		FeedingComponent,
		TimerComponent
	]
})
export class FeedingModule { }
