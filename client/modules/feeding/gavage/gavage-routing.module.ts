import { NgModule }        from '@angular/core';
import { RouterModule }    from '@angular/router';

import { GavageComponent } from './gavage.component';

@NgModule({
	imports: [RouterModule.forChild([
		{
			path: 'feeding/gavage/:feedingId',
			component: GavageComponent
		}
	])],
	exports: [RouterModule]
})
export class GavageRoutingModule { }
