import { NgModule }          from '@angular/core';
import { SharedModule }      from '../../shared/shared.module';
import { OralRoutingModule } from './oral-routing.module';

// import your components below
import { OralComponent }     from './oral.component';
import { WrapUpComponent }   from './components/wrap-up/wrap-up.component'

@NgModule({
	imports: [SharedModule, OralRoutingModule],
	declarations: [
		// List your components here
		OralComponent,
		WrapUpComponent
	]
})
export class OralModule { }
