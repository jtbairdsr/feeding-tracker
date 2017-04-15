import { NgModule }        from '@angular/core';
import { RouterModule }    from '@angular/router';

import { OralComponent }   from './oral.component';
import { WrapUpComponent } from './components/wrap-up/wrap-up.component';

@NgModule({
	imports: [RouterModule.forChild([
		{
			path: 'feeding/oral/:feedingId',
			component: OralComponent
		},
		{
			path: 'feeding/oral/:feedingId/wrap-up',
			component: WrapUpComponent
		}
	])],
	exports: [RouterModule]
})
export class OralRoutingModule { }
