import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-domaineupdate',
  templateUrl: './domaineupdate.component.html',
  styleUrls: ['./domaineupdate.component.css']
})
export class DomaineupdateComponent implements OnInit {

  public domaineId;
  public domaine;

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.domaineId = this.route.snapshot.paramMap.get('id')
    this.http.get("http://localhost:8080/domaines/"+this.domaineId)
    .subscribe(data=>{

      this.domaine = data;
      
    }, err=>{
      console.log(err);
    })
  }


  //modifier Domaine
  modifierDomaine(form){

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'domaine modifié!',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {

        this.http.patch("http://localhost:8080/domaines/"+this.domaineId ,form ,{observe : 'response'} )
        .subscribe(data =>{
          console.log(this.domaineId+ data);
        }, err=>{
          console.log(this.domaineId + err);
        })
        location.reload();
      
    })
  }

}
