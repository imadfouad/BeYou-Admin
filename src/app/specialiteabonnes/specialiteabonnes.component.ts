import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-specialiteabonnes',
  templateUrl: './specialiteabonnes.component.html',
  styleUrls: ['./specialiteabonnes.component.css']
})
export class SpecialiteabonnesComponent implements OnInit {

  public specialiteId;
  public users;

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.specialiteId = this.route.snapshot.paramMap.get('id');
    //users of specialite
    this.http.get("http://localhost:8080/specialiteAbonnes?specialiteId="+this.specialiteId)
    .subscribe(data=>{
      this.users = data;
    }, err=>{
      console.log(err);
    })
  }


  
  suspendreUser(userId){
    let params = new HttpParams()
    .set('userId', userId)
    this.http.get("http://localhost:8080/suspendreUser",{params: params} ).subscribe(data=>{
      //users of specialite
      this.http.get("http://localhost:8080/specialiteAbonnes?specialiteId="+this.specialiteId)
      .subscribe(data=>{
        this.users = data;
      }, err=>{
        console.log(err);
      })
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
        Swal.fire(
          'Supprimé!',
          'utilisateur supprimé!',
          'success'
        )
        //users of specialite
        this.http.get("http://localhost:8080/specialiteAbonnes?specialiteId="+this.specialiteId)
        .subscribe(data=>{
          this.users = data;
        }, err=>{
          console.log(err);
        })
      },
      err=>{
        console.log(err);
      })
      
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
