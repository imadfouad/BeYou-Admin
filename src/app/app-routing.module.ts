import { IsSignedInGuard } from './Services/IsSignedInGuard';
import { CommentairesignalesComponent } from './commentairesignales/commentairesignales.component';
import { TestComponent } from './test/test.component';
import { SectionsComponent } from './sections/sections.component';
import { VillesComponent } from './villes/villes.component';
import { PaysComponent } from './pays/pays.component';
import { SpecialitesComponent } from './specialites/specialites.component';
import { DomainesComponent } from './domaines/domaines.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { PostesComponent } from './postes/postes.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserpostesComponent } from './userpostes/userpostes.component';
import { DetailposteComponent } from './detailposte/detailposte.component';
import { AbonnesComponent } from './abonnes/abonnes.component';
import { PostesignalesComponent } from './postesignales/postesignales.component';
import { PostesectionComponent } from './postesection/postesection.component';
import { SectionupdateComponent } from './sectionupdate/sectionupdate.component';
import { DomaineupdateComponent } from './domaineupdate/domaineupdate.component';
import { SpecialiteabonnesComponent } from './specialiteabonnes/specialiteabonnes.component';
import { UpdatespecialiteComponent } from './updatespecialite/updatespecialite.component';
import { AddsectionComponent } from './addsection/addsection.component';
import { AdddomaineComponent } from './adddomaine/adddomaine.component';
import { AddspecialiteComponent } from './addspecialite/addspecialite.component';

const routes: Routes = [
  {
    path:"",
    component: DashboardComponent
  },
  {
    path:"test",
    component: TestComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"dashboard",
    component: DashboardComponent
  },
  {
    path:"users",
    component: UsersComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"postes",
    component: PostesComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"commentaires",
    component: CommentairesComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"domaines",
    component: DomainesComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"sections",
    component: SectionsComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"pays",
    component: PaysComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"villes",
    component: VillesComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"updateUser/:id",
    component: UpdateuserComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"userPostes/:id",
    component: UserpostesComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"detailsPoste/:id",
    component: DetailposteComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"abonnes",
    component: AbonnesComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"postesSignales",
    component: PostesignalesComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"commentairesSignales",
    component: CommentairesignalesComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"sectionPostes/:sectionName",
    component: PostesectionComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"updateSection/:sectionId",
    component: SectionupdateComponent,canActivate: [
      IsSignedInGuard
    ] 
  }
  ,
  {
    path:"specialites/:id",
    component: SpecialitesComponent,canActivate: [
      IsSignedInGuard
    ] 
  }
  ,
  {
    path:"updateDomaine/:id",
    component: DomaineupdateComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"abonnesSpecialite/:id",
    component: SpecialiteabonnesComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"updateSpecialite/:id",
    component: UpdatespecialiteComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"addSection",
    component: AddsectionComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"addDomaine",
    component: AdddomaineComponent,canActivate: [
      IsSignedInGuard
    ] 
  },
  {
    path:"addSpecialite",
    component: AddspecialiteComponent,canActivate: [
      IsSignedInGuard
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
