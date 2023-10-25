import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

import { HomerentUIComponent } from './homerent-ui/homerent-ui.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { TableModule } from './table/table.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { HomepageComponent } from './foodwebsiteUI/homepage/homepage.component';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
// import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomerentUIComponent],
  imports: [
    BrowserModule,
    CarouselModule,
    NgxBootstrapIconsModule.pick(allIcons),
    DashboardModule,
    RouterModule,
    TableModule,
    BrowserAnimationsModule,

    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    // HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
