import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userpostes',
  templateUrl: './userpostes.component.html',
  styleUrls: ['./userpostes.component.css']
})
export class UserpostesComponent implements OnInit {

  public userId;
  public postes;

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')
    //postes
    let params = new HttpParams()
    .set('id', this.userId);
    this.http.get("http://localhost:8080/userPostes",{params: params}).subscribe(data=>{
      this.postes = data;
    }, err=>{
      console.log(err);
    })
  }

  deletePoste(idPoste){
    this.http.delete("http://localhost:8080/postes/"+idPoste).subscribe(
      data=>{
          //postes
          let params = new HttpParams()
          .set('id', this.userId);
          this.http.get("http://localhost:8080/userPostes",{params: params}).subscribe(data=>{
            this.postes = data;
          }, err=>{
            console.log(err);
          })
      }
    )
    
  }


}
