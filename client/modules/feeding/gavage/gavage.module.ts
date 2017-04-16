import { NgModule }            from '@angular/core';
import { SharedModule }        from '../../shared/shared.module';
import { GavageRoutingModule } from './gavage-routing.module';

// import your components below
import { GavageComponent }     from './gavage.component';

@NgModule({
	imports: [SharedModule, GavageRoutingModule],
	declarations: [
		// List your components here
		GavageComponent
	]
})
export class GavageModule { }
