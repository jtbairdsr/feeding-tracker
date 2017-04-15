import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { FeedingComponent } from './feeding.component';
import { TimerComponent }    from './components/timer/timer.component';

@NgModule({
	imports: [RouterModule.forChild([
		{
			path: 'feeding',
			component: FeedingComponent,
		},
		{
			path: 'feeding/timer/:feedingId',
			component: TimerComponent
		}
	])],
	exports: [RouterModule]
})
export class FeedingRoutingModule { }
