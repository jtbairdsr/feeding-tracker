import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { FeedingComponent } from './feeding.component';

@NgModule({
	imports: [RouterModule.forChild([
		{
			path: 'feeding',
			component: FeedingComponent,
		}
	])],
	exports: [RouterModule]
})
export class FeedingRoutingModule { }
