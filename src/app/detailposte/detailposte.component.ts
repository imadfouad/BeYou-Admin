import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailposte',
  templateUrl: './detailposte.component.html',
  styleUrls: ['./detailposte.component.css']
})
export class DetailposteComponent implements OnInit {

  public posteId;
  public poste;
  public commentaires;

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posteId = this.route.snapshot.paramMap.get('id')
    //poste
    this.http.get("http://localhost:8080/postes/"+this.posteId+"?projection=p2").subscribe(data=>{
      this.poste = data;
    }, err=>{
      console.log(err);
    })
    //commentaires
    this.http.get("http://localhost:8080/postes/"+this.posteId+"/commentaires?projection=p3").subscribe(data=>{
      this.commentaires = data;
    }, err=>{
      console.log(err);
    })
  }

}
