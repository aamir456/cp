import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { GridComponent } from './grid/grid.component';
const routes: Routes = [  
  { path: 'accordion', component: AccordionComponent },
  { path: 'grid', component: GridComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
