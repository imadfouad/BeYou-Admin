import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-domaines',
  templateUrl: './domaines.component.html',
  styleUrls: ['./domaines.component.css']
})
export class DomainesComponent implements OnInit {

  public domaines;
  public pages;
  public pagesArray;
  public currentPage;

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //DOMAINES
    this.http.get("http://localhost:8080/domaines")
        .subscribe(data=>{

          this.domaines = data;
          
        }, err=>{
          console.log(err);
        })


        //pages
        this.http.get("http://localhost:8080/domaines")
        .subscribe(data=>{
          this.pages = data;
          console.log(this.pages.page.totalPages)
          this.pagesArray = new Array(this.pages.page.totalPages)
        }, err=>{
          console.log(err);
        })


  }

  //charger la page d'ajout domaine
  addLoad()
  {
    this.router.navigateByUrl("/addDomaine")
  }


  //pagination
  pageDomaines(i){
    this.currentPage=i;
    this.http.get("http://localhost:8080/domaines?page="+i)
    .subscribe(data=>{
      this.domaines = data;
    }, err=>{
      console.log(err);
    })
  }


  //supprimer Domaine
  supprimerDomaine(domaineId){


    Swal.fire({
      title: 'Etes-vous sûre de supprimer ce domaine?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        this.http.delete("http://localhost:8080/domaines/"+domaineId)
        .subscribe(data=>{
          Swal.fire(
            'Supprimé!',
            'domaine supprimé!',
            'success'
          )
          //DOMAINES
          this.http.get("http://localhost:8080/domaines")
          .subscribe(data=>{
  
            this.domaines = data;
            
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

  //modifier Domaine
  modifierDomaine(domaineId , domaineName){

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'domaine modifié!',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {

        this.http.patch("http://localhost:8080/domaines/"+domaineId ,domaineName ,{observe : 'response'} )
        .subscribe(data =>{
          console.log(domaineId+ data);
        }, err=>{
          console.log(domaineId + err);
        })
        location.reload();
      
    })
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
