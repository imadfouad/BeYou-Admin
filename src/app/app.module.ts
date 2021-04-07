import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

import { HttpClientModule } from '@angular/common/http';
import { PostesComponent } from './postes/postes.component';
import { CommentairesComponent } from './commentaires/commentaires.component';

import { FormsModule } from '@angular/forms';
import { DomainesComponent } from './domaines/domaines.component';
import { SpecialitesComponent } from './specialites/specialites.component';
import { SectionsComponent } from './sections/sections.component';
import { VillesComponent } from './villes/villes.component';
import { PaysComponent } from './pays/pays.component';

//map
import { AgmCoreModule } from '@agm/core';
//scroll
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TestComponent } from './test/test.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserpostesComponent } from './userpostes/userpostes.component';
import { DetailposteComponent } from './detailposte/detailposte.component';
import { AbonnesComponent } from './abonnes/abonnes.component';
import { PostesignalesComponent } from './postesignales/postesignales.component';
import { CommentairesignalesComponent } from './commentairesignales/commentairesignales.component';
import { PostesectionComponent } from './postesection/postesection.component';
import { SectionupdateComponent } from './sectionupdate/sectionupdate.component';
import { DomaineupdateComponent } from './domaineupdate/domaineupdate.component';
import { SpecialiteabonnesComponent } from './specialiteabonnes/specialiteabonnes.component';
import { UpdatespecialiteComponent } from './updatespecialite/updatespecialite.component';
import { AddsectionComponent } from './addsection/addsection.component';
import { AdddomaineComponent } from './adddomaine/adddomaine.component';
import { AddspecialiteComponent } from './addspecialite/addspecialite.component';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    UsersComponent,
    PostesComponent,
    CommentairesComponent,
    DomainesComponent,
    SpecialitesComponent,
    SectionsComponent,
    VillesComponent,
    PaysComponent,
    TestComponent,
    UpdateuserComponent,
    UserpostesComponent,
    DetailposteComponent,
    AbonnesComponent,
    PostesignalesComponent,
    CommentairesignalesComponent,
    PostesectionComponent,
    SectionupdateComponent,
    DomaineupdateComponent,
    SpecialiteabonnesComponent,
    UpdatespecialiteComponent,
    AddsectionComponent,
    AdddomaineComponent,
    AddspecialiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ScrollingModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB7TNBqYLcNJZCytzhPD7dJln87k7_4YXc'
    })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
