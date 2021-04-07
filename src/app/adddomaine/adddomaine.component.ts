import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adddomaine',
  templateUrl: './adddomaine.component.html',
  styleUrls: ['./adddomaine.component.css']
})
export class AdddomaineComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  //add Domaine
  addDomaine(domaine){
    Swal.fire({
      title: 'Vous voulez ajouter ce domaine?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, ajouter!',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        
        this.http.post("http://localhost:8080/domaines",domaine ,{observe : 'response'} )
        .subscribe(data =>{
          console.log(domaine+ data);
        }, err=>{
          console.log(domaine + err);
        })

        Swal.fire(
          'Ajouté!',
          'domaine ajouté!',
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
