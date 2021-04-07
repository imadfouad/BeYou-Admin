import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'



@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  public sections;
  public pages;
  public pagesArray;
  public currentPage;

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.http.get("http://localhost:8080/getSections")
    .subscribe(data=>{
      this.sections = data;
    }, err=>{
      console.log(err);
    })

    //pages
    this.http.get("http://localhost:8080/sections")
    .subscribe(data=>{
      this.pages = data;
      console.log(this.pages.page.totalPages)
      this.pagesArray = new Array(this.pages.page.totalPages)
    }, err=>{
      console.log(err);
    })


  }

  //charger la page d'ajout section
  addLoad()
  {
    this.router.navigateByUrl("/addSection")
  }
  //modifier section 

  modifierSection(sectionId,sectionName){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'section modifiée!',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {

        this.http.patch("http://localhost:8080/sections/"+sectionId ,sectionName ,{observe : 'response'} )
        .subscribe(data =>{
          console.log(sectionId+ data);
        }, err=>{
          console.log(sectionId + err);
        })
        location.reload();
      
    })
  }


   //add Domaine
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


  // delete Section

  supprimerSection(sectionId){

    
    Swal.fire({
      title: 'Etes-vous sûre de supprimer cette section?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        this.http.delete("http://localhost:8080/sections/"+sectionId)
        .subscribe(data=>{
          console.log(data);

          Swal.fire(
            'Supprimée!',
            'section supprimée!',
            'success'
          )
          location.reload();

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
