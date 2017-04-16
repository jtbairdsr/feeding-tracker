import { NgModule }        from '@angular/core';
import { RouterModule }    from '@angular/router';

import { GavageComponent } from './gavage.component';
import { FinishComponent } from './components/finish/finish.component';

@NgModule({
	imports: [RouterModule.forChild([
		{
			path: 'feeding/gavage/:feedingId',
			component: GavageComponent
		},
		{
			path: 'feeding/gavage/:feedingId/finish',
			component: FinishComponent
		}
	])],
	exports: [RouterModule]
})
export class GavageRoutingModule { }
