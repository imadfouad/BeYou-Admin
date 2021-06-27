import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient , HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

@Component({
  selector: 'app-abonnes',
  templateUrl: './abonnes.component.html',
  styleUrls: ['./abonnes.component.css']
})
export class AbonnesComponent implements OnInit {
  
  public users;
  public pages;
  public pagesArray;
  public currentPage;
  public roles;
  tkn

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   
    //users
    this.http.get("http://localhost:8080/appRoles/3?projection=p7&size=100")
    .subscribe(data=>{
      this.users = data;
    }, err=>{
      console.log(err);
    })

    //pages
    this.http.get("http://localhost:8080/appUsers")
    .subscribe(data=>{
      this.pages = data;
      console.log(this.pages.page.totalPages)
      this.pagesArray = new Array(this.pages.page.totalPages)
    }, err=>{
      console.log(err);
    })

    

  }

  suspendreUser(userId){
    let params = new HttpParams()
    .set('userId', userId)
    this.http.get("http://localhost:8080/suspendreUser",{params: params} ).subscribe(data=>{
      //users
      this.http.get("http://localhost:8080/appRoles/3?projection=p7&size=100")
      .subscribe(data=>{
        this.users = data;
      }, err=>{
        console.log(err);
      })
    })
  }

  //suspension utilisateur   MABQINACH KHDAMIN BIHAA
  suspenUser(userId , suspension){

    Swal.fire({
      title: 'Etes-vous sûre de suspendre cet utilisateur?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, suspendre!',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        
        this.http.patch("http://localhost:8080/appUsers/"+userId ,suspension ,{observe : 'response'} )
        .subscribe(data =>{
          console.log(suspension+ data);
        }, err=>{
          console.log(suspension + err);
        })

        Swal.fire(
          'Suspendu!',
          'utilisateur suspendu!',
          'success'
        )
        location.reload();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          '',
          'error'
        )
      }
    })    
  }

  //pagination
  pageUsers(i){
    this.currentPage=i;
    this.http.get("http://localhost:8080/appUsers?projection=p1&page="+i+"&size=20")
    .subscribe(data=>{
      this.users = data;
    }, err=>{
      console.log(err);
    })
  }



//supprimer un utilisateur
  deleteUser(userId){


    Swal.fire({
      title: 'Etes-vous sûre de supprimer cet utilisateur?',
      text: 'Vous ne pourrez plus le récuperer !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        this.http.delete("http://localhost:8080/appUsers/"+userId)
        .subscribe(data=>{
          console.log(data);
        },
        err=>{
          console.log(err);
        })
        Swal.fire(
          'Supprimé!',
          'utilisateur supprimé!',
          'success'
        )
        location.reload();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          '',
          'error'
        )
      }
    }) 
  }


}
