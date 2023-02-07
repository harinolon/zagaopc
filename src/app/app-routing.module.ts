import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './tabComponents/about/about.component';
import { CareersComponent } from './tabComponents/careers/careers.component';
import { CertificationComponent } from './tabComponents/certification/certification.component';
import { ContactComponent } from './tabComponents/contact/contact.component';
import { DeveloperTrainingComponent } from './tabComponents/developer-training/developer-training.component';
import { PortfolioComponent } from './tabComponents/portfolio/portfolio.component';
import { RedhatCertsComponent } from './tabComponents/redhat-certs/redhat-certs.component';
import { ServicesComponent } from './tabComponents/services/services.component';
import { ProfileComponent } from './tabComponents/profile/profile.component';
import { ResourceComponent } from './tabComponents/resource/resource.component';
import { OurCompanyComponent } from './tabComponents/our-company/our-company.component';
import { ManagementTeamComponent } from './tabComponents/management-team/management-team.component';
import { DevopsComponent } from './tabComponents/devops/devops.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'redhatCerts', component: RedhatCertsComponent },
  { path: 'certification', component: CertificationComponent },
  { path: 'devTraining', component: DeveloperTrainingComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'career', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'resource', component: ResourceComponent },
  { path: 'ourCompany', component: OurCompanyComponent},
  { path: 'managementTeam', component: ManagementTeamComponent},
  { path: 'devops', component: DevopsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
