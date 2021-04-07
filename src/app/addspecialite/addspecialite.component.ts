import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addspecialite',
  templateUrl: './addspecialite.component.html',
  styleUrls: ['./addspecialite.component.css']
})
export class AddspecialiteComponent implements OnInit {

  public domaines;

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //DOMAINES
    this.http.get("http://localhost:8080/domaines")
        .subscribe(data=>{

          this.domaines = data;
          
        }, err=>{
          console.log(err);
        })
  }


  //add specialite
  addSpecialite(form){
    Swal.fire({
      title: 'Vous voulez ajouter cette spécialité?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, ajouter!',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        
        let params = new HttpParams()
        .set('specialiteName',form.specialiteName)
        .set('domaineName', form.domaineName);

        this.http.get("http://localhost:8080/addSpecialite",{params: params} )
        .subscribe(data =>{
        }, err=>{
        })

        Swal.fire(
          'Ajouté!',
          'ville ajoutée!',
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
