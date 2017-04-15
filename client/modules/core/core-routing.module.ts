import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
	// Default Path ---------------------------------------------------------------
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},
	// Profile Paths --------------------------------------------------------------
	{
		path: 'profile',
		redirectTo: '/profile',
		pathMatch: 'full'
	},
	// Feeding Paths --------------------------------------------------------------
	{
		path: 'feeding',
		redirectTo: '/feeding',
		pathMatch: 'full'
	},
	// Not Found Path -------------------------------------------------------------
	{
		path: '**',
		redirectTo: '/PageNotFound',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class CoreRoutingModule { }
