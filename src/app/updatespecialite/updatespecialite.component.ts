import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatespecialite',
  templateUrl: './updatespecialite.component.html',
  styleUrls: ['./updatespecialite.component.css']
})
export class UpdatespecialiteComponent implements OnInit {

  public specialiteId;
  public specialite;

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.specialiteId = this.route.snapshot.paramMap.get('id')
    this.http.get("http://localhost:8080/specialites/"+this.specialiteId)
    .subscribe(data=>{

      this.specialite = data;
      
    }, err=>{
      console.log(err);
    })
  }


  //modifier specialite
  modifierSpecialite(form){
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'spécialité modifiée!',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
  
        this.http.patch("http://localhost:8080/specialites/"+this.specialiteId ,form ,{observe : 'response'} )
        .subscribe(data =>{
          console.log(this.specialiteId+ data);
        }, err=>{
          console.log(this.specialiteId + err);
        })
        location.reload();
      
    })   
  }

}
