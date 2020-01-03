import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AppComponent } from './app.component';



const routes: Routes = [ 
   
  {path:'',component:AppComponent},
  {path:'**',component:AppComponent},
  {path:'home',component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



//path: '/Components/home', loadChildren: () => import('./Components/home/home.module').then(m => m.HomeModule)