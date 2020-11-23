import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeadliesComponent } from './headlies.component';
import { MaterialModule } from '../material.module';

const routes: Routes= [
  {
    path: '',
    component: HeadliesComponent

  }
];

@NgModule({
  declarations: [HeadliesComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes) ,MaterialModule]
})
export class HeadliesModule { }
