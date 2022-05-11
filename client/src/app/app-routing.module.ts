import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/identification/signup/signup.component';
import { FourOFourComponent } from './components/four-o-four/four-o-four.component';


const routes: Routes = [

       { path: 'signup', component: SignupComponent},

       { path: 'not-found', component: FourOFourComponent},

       { path:'folders',
	 loadChildren: ()=> import('./components/folders/folders.module').then(m => m.FoldersPageModule)},
	 
       { path:'folder', redirectTo: '/folders/folder', pathMatch: 'full'},
       
       { path: 'identification',
	   loadChildren: ()=> import('./components/identification/identification.module').then(m=>m.IdentificationPageModule)},

       { path: '', redirectTo: 'identification', pathMatch: 'full' },

       { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}




