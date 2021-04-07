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
    component: TestComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent
  },
  {
    path:"users",
    component: UsersComponent
  },
  {
    path:"postes",
    component: PostesComponent
  },
  {
    path:"commentaires",
    component: CommentairesComponent
  },
  {
    path:"domaines",
    component: DomainesComponent
  },
  {
    path:"sections",
    component: SectionsComponent
  },
  {
    path:"pays",
    component: PaysComponent
  },
  {
    path:"villes",
    component: VillesComponent
  },
  {
    path:"updateUser/:id",
    component: UpdateuserComponent
  },
  {
    path:"userPostes/:id",
    component: UserpostesComponent
  },
  {
    path:"detailsPoste/:id",
    component: DetailposteComponent
  },
  {
    path:"abonnes",
    component: AbonnesComponent
  },
  {
    path:"postesSignales",
    component: PostesignalesComponent
  },
  {
    path:"commentairesSignales",
    component: CommentairesignalesComponent
  },
  {
    path:"sectionPostes/:sectionName",
    component: PostesectionComponent
  },
  {
    path:"updateSection/:sectionId",
    component: SectionupdateComponent
  }
  ,
  {
    path:"specialites/:id",
    component: SpecialitesComponent
  }
  ,
  {
    path:"updateDomaine/:id",
    component: DomaineupdateComponent
  },
  {
    path:"abonnesSpecialite/:id",
    component: SpecialiteabonnesComponent
  },
  {
    path:"updateSpecialite/:id",
    component: UpdatespecialiteComponent
  },
  {
    path:"addSection",
    component: AddsectionComponent
  },
  {
    path:"addDomaine",
    component: AdddomaineComponent
  },
  {
    path:"addSpecialite",
    component: AddspecialiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
