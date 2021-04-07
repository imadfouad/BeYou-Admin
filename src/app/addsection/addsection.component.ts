import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addsection',
  templateUrl: './addsection.component.html',
  styleUrls: ['./addsection.component.css']
})
export class AddsectionComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

   //add Section
   addSection(section){
    Swal.fire({
      title: 'Vous voulez ajouter cette section?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, ajouter!',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        
        this.http.post("http://localhost:8080/sections",section ,{observe : 'response'} )
        .subscribe(data =>{
          console.log(section+ data);
        }, err=>{
          console.log(section + err);
        })

        Swal.fire(
          'Ajouté!',
          'section ajoutée!',
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
