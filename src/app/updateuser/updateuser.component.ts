import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  public userId;
  public user;

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')
    //user
    this.http.get("http://localhost:8080/appUsers/"+this.userId+"?projection=p1")
    .subscribe(data=>{
      this.user = data;
    }, err=>{
      console.log(err);
    })
  }

  updateProfil(form){
    this.http.patch("http://localhost:8080/appUsers/"+form.id, form ,{observe : 'response'} ).subscribe(data=>{
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Profil mis à jour !',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  
  suspendreUser(userId){
    let params = new HttpParams()
    .set('userId', userId)
    this.http.get("http://localhost:8080/suspendreUser",{params: params} ).subscribe(data=>{
      //user
      this.http.get("http://localhost:8080/appUsers/"+this.userId+"?projection=p1")
      .subscribe(data=>{
        this.user = data;
        Swal.fire({
          icon: 'warning',
          title: 'Utilisateur suspendu!',
          showConfirmButton: false,
          timer: 1500
        })
      }, err=>{
        console.log(err);
      })
    })
  }

}
