import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'La carte des utilisateurs ';
  lat = 51.678418;
  lng = 7.809007;
  
  public payses;
  public postes;
  public commentaires;
  public utilisateurs;
  public villes;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    //postes
    this.http.get("http://localhost:8080/postes?size=165464")
        .subscribe(data=>{
          let nbrPostesSignal = 0;
          this.postes = data;
          this.postes._embedded.postes.forEach(p => {
            if(p.signale)
                nbrPostesSignal = nbrPostesSignal +1;
          });       
          this.postes = nbrPostesSignal;
        }, err=>{
          console.log(err);
        })

        //commentaires
        this.http.get("http://localhost:8080/commentaires?size=165464")
        .subscribe(data=>{
          let nbrCommSignal = 0;
          this.commentaires = data;
          this.commentaires._embedded.commentaires.forEach(c => {
            if(c.isSignale)
                nbrCommSignal = nbrCommSignal +1;
          });       
          this.commentaires = nbrCommSignal;
          
        }, err=>{
          console.log(err);
        })

        //utilisateurs
        this.http.get("http://localhost:8080/appUsers?projection=p1&size=165464")
        .subscribe(data=>{

          this.utilisateurs = data;
          this.utilisateurs = this.utilisateurs.page.totalElements
          
        }, err=>{
          console.log(err);
        })

        //PAYS
        this.http.get("http://localhost:8080/payses?size=210&projection=p6")
        .subscribe(data=>{

          this.payses = data;
          this.payses = this.payses._embedded.payses
        }, err=>{
          console.log(err);
        })

        //VILLES
        this.http.get("http://localhost:8080/villes?size=100")
        .subscribe(data=>{

          this.villes = data;
          this.villes = this.villes._embedded.villes
        }, err=>{
          console.log(err);
        })

  }
  

icon = {
  url: 'https://images.emojiterra.com/google/android-10/512px/1f4cd.png',
  scaledSize: {
    width: 25,
    height: 25
  }}

}
