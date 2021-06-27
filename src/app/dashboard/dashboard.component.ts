import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";


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
  public tkn;
  public roles;

  constructor(private http:HttpClient,  private route: ActivatedRoute, private router:Router ) { 
    this.route.queryParams.subscribe(params => {
      this.tkn = params['tkn'];
  });
  }

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
        this.http.get("http://localhost:8080/villes?size=100&projection=p5")
        .subscribe(data=>{

          this.villes = data;
          this.villes = this.villes._embedded.villes
          console.log(this.villes[1])
        }, err=>{
          console.log(err);
        })

        //verification Administrateur
        let jwtToken =  this.tkn;
        let jwtHelper = new JwtHelperService();

        let tk = localStorage.getItem('token');

        if(tk==null && jwtToken==null){
          window.location.href = "http://localhost:4200"
        }

        try{
          if(jwtToken != null)
            this.roles = jwtHelper.decodeToken(jwtToken).roles;
        }
        catch(e){
          if(localStorage.getItem('token')!.toString!=null)
          {
            this.roles = jwtHelper.decodeToken(tk!).roles;
          }
          else 
            window.location.href = "http://localhost:4200"
        }
        
        //console.log(this.roles[0].authority == 'ADMIN')
        if((jwtToken==null || !(this.roles[0].authority == 'ADMIN') && tk==null)  ){
            //window.location.href = "http://localhost:4200"
        }else{
          localStorage.setItem('token',jwtToken)
          this.router.navigateByUrl("/")
        }



  }
  

icon = {
  url: 'https://images.emojiterra.com/google/android-10/512px/1f4cd.png',
  scaledSize: {
    width: 25,
    height: 25
  }}

}
