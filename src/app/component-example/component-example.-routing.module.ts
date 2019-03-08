import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentExampleComponent } from './component-example.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentExampleRoutingModule {}
