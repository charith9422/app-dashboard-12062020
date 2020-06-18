import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ApplicationComponent } from './component/application/application.component';
import { SupportComponent } from './component/support/support.component';
import { RouterModule } from '@angular/router';
import { SearchPortalComponent } from './layout/search-portal/search-portal.component';
import { NavigationBarComponent } from './layout/navigation-bar/navigation-bar.component';
import { SideNavigationComponent } from './layout/side-navigation/side-navigation.component';
import { ChartsModule } from 'ng2-charts';

// import { FusionChartsModule } from 'angular-fusioncharts';

/* // Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'; */

// FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DashboardComponent,
    ApplicationComponent,
    SupportComponent,
    SearchPortalComponent,
    NavigationBarComponent,
    SideNavigationComponent,
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
