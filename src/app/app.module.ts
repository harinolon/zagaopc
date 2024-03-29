import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StickyHeaderModule, NavbarModule } from 'angular-bootstrap-md';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';

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
import { CertificationComponent } from './tabComponents/certification/certification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './tabComponents/footer/footer.component';
import { AnimationComponent } from './animation/animation.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { ContactModalComponent } from './tabComponents/certification/contact-modal/contact-modal.component';
import { ResourceComponent } from './tabComponents/resource/resource.component';
import { ProfileComponent } from './tabComponents/profile/profile.component';
import { OurCompanyComponent } from './tabComponents/our-company/our-company.component';
import { ManagementTeamComponent } from './tabComponents/management-team/management-team.component';
import { DevopsComponent } from './tabComponents/devops/devops.component';

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
    CertificationComponent,
    FooterComponent,
    AnimationComponent,
    ContactModalComponent,
    ResourceComponent,
    ProfileComponent,
    OurCompanyComponent,
    ManagementTeamComponent,
    DevopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    MdbCarouselModule,
    StickyHeaderModule,
    NavbarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MdbModalModule,
    MatProgressSpinnerModule,
    MatMenuModule
  ],
  // providers: [MenuItemsComponent],
  providers: [MenuItemsComponent, {
    provide: APP_INITIALIZER, 
    useValue: () =>  new Promise(resolve =>
      setTimeout(resolve, 3000)
    ),
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
// providers: [MenuItemsComponent, {
//   provide: APP_INITIALIZER, 
//   useValue: () =>  new Promise(resolve =>
//     setTimeout(resolve, 3000)
//   ),
//   multi: true
// }],

