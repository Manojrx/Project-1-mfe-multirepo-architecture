import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomcomponentComponent } from './randomcomponent/randomcomponent.component';

const routes: Routes = [
  {path: 'random' , component:RandomcomponentComponent},
  
  {path:'counter' , loadChildren : () =>{
    return loadRemoteModule( {
      remoteEntry:"http://localhost:4300/remoteEntry.js",
      remoteName:"remoteApp",
      exposedModule:"./CounterModule",
    }).then( m => m.CounterModule).catch(err => console.log(err))
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
