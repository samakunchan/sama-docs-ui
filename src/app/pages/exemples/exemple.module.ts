import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { MediumComponent } from './medium/medium.component';
import { HighComponent } from './high/high.component';


const routes: Routes = [
  {path: 'basic', component: BasicComponent},
  {path: 'medium', component: MediumComponent},
  {path: 'high', component: HighComponent},
]
@NgModule({
  declarations: [
    BasicComponent,
    MediumComponent,
    HighComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExempleModule { }
