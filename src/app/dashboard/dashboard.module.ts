import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { DashbordRoutingModule } from './dashbord-routing.module';
import { RouterHomeComponent } from './router-home/router-home.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    RouterHomeComponent,
    AnalyticsComponent,
    ProductsComponent,
  ],
  imports: [CommonModule, RouterModule, DashbordRoutingModule],
  exports: [
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    RouterHomeComponent,
    ProductsComponent,
  ],
})
export class DashboardModule {}
