import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeadliesComponent } from './headlies/headlies.component';
import { SourcesComponent } from './sources/sources.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path:'',
   component: HomeComponent
  },
  { path:'headlines',
  // component: HeadliesComponent 
  loadChildren: './headlies/headlies.module#HeadliesModule'
  
},
  { path:'sources',
  //  component: SourcesComponent
   loadChildren: './sources/sources.module#SourcesModule'
  },
  { path:'favorites',
  // component: FavoritesComponent
  loadChildren:'./favorites/favorites.module#FavoritesModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
