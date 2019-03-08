import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceExampleComponent } from './service-example.component';
import { ServiceExampleRoutingModule } from './service-example.-routing.module';

@NgModule({
  declarations: [ServiceExampleComponent],
  imports: [CommonModule, ServiceExampleRoutingModule]
})
export class ServiceExampleModule {}
