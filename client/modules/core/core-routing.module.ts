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
	// Feeding-Oral Paths ---------------------------------------------------------
	{
		path: 'feeding/oral/:feedingId',
		redirectTo: '/feeding/oral/:feedingId',
		pathMatch: 'full'
	},
	{
		path: 'feeding/oral/:feedingId/wrap-up',
		redirectTo: '/feeding/oral/:feedingId/wrap-up',
		pathMatch: 'full'
	},
	{
		path: 'feeding/oral/:feedingId/prunes',
		redirectTo: '/feeding/oral/:feedingId/prunes',
		pathMatch: 'full'
	},
	// Feeding-Gavage Paths -------------------------------------------------------
	{
		path: 'feeding/gavage/:feedingId',
		redirectTo: '/feeding/gavage/:feedingId',
		pathMatch: 'full'
	},
	{
		path: 'feeding/gavage/:feedingId/finish',
		redirectTo: '/feeding/gavage/:feedingId/finish',
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
