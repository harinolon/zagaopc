import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { StickyHeaderModule, NavbarModule } from 'angular-bootstrap-md'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { AboutComponent } from './tabComponents/about/about.component';
import { ServicesComponent } from './tabComponents/services/services.component';
import { RedhatCertsComponent } from './tabComponents/redhat-certs/redhat-certs.component';
import { DeveloperTrainingComponent } from './tabComponents/developer-training/developer-training.component';
import { PortfolioComponent } from './tabComponents/portfolio/portfolio.component';
import { CareersComponent } from './tabComponents/careers/careers.component';
import { ContactComponent } from './tabComponents/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemsComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    RedhatCertsComponent,
    DeveloperTrainingComponent,
    PortfolioComponent,
    CareersComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    MdbCarouselModule,
    StickyHeaderModule,
    NavbarModule
  ],
  providers: [MenuItemsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
