import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterHomeComponent } from './router-home/router-home.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: RouterHomeComponent,
  },

  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashbordRoutingModule {}
