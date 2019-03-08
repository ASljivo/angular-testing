import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'strength-pipe',
    loadChildren: './pipe-example/pipe-example.module#PipeExampleModule'
  },
  {
    path: 'search-item-service',
    loadChildren:
      './service-example/service-example.module#ServiceExampleModule'
  },
  {
    path: 'posts-component',
    loadChildren:
      './component-example/component-example.module#ComponentExampleModule'
  },
  {
    path: 'hover-directive',
    loadChildren:
      './directive-example/directive-example.module#DirectiveExampleModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
