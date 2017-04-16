import { NgModule }        from '@angular/core';
import { RouterModule }    from '@angular/router';

import { OralComponent }   from './oral.component';
import { WrapUpComponent } from './components/wrap-up/wrap-up.component';
import { PrunesComponent } from './components/prunes/prunes.component';

@NgModule({
	imports: [RouterModule.forChild([
		{
			path: 'feeding/oral/:feedingId',
			component: OralComponent
		},
		{
			path: 'feeding/oral/:feedingId/wrap-up',
			component: WrapUpComponent
		},
		{
			path: 'feeding/oral/:feedingId/prunes',
			component: PrunesComponent
		}
	])],
	exports: [RouterModule]
})
export class OralRoutingModule { }
