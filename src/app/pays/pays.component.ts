import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {

  public payses;
  public pages;
  public pagesArray;
  public currentPage;
  public listPays;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    //test
    

    
    this.http.get("http://localhost:8080/payses")
        .subscribe(data=>{

          this.payses = data;
          
        }, err=>{
          console.log(err);
        })


        //pages
        this.http.get("http://localhost:8080/payses")
        .subscribe(data=>{
          this.pages = data;
          console.log(this.pages.page.totalPages)
          this.pagesArray = new Array(this.pages.page.totalPages)
        }, err=>{
          console.log(err);
        })


        

  }


  
  //pagination
  pagePayses(i){
    this.currentPage=i;
    this.http.get("http://localhost:8080/payses?page="+i)
    .subscribe(data=>{
      this.payses = data;
    }, err=>{
      console.log(err);
    })
  }


  //supprimer Pays
  supprimerPays(paysId){


    Swal.fire({
      title: 'Etes-vous sûre de supprimer ce pays?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        this.http.delete("http://localhost:8080/payses/"+paysId)
        .subscribe(data=>{
          console.log(data);
        },
        err=>{
          console.log(err);
        })
        Swal.fire(
          'Supprimé!',
          'pays supprimé!',
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

  //modifier Pays
  modifierPays(paysId , paysName){

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'pays modifié!',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {

        this.http.patch("http://localhost:8080/payses/"+paysId ,paysName ,{observe : 'response'} )
        .subscribe(data =>{
          console.log(paysId+ data);
        }, err=>{
          console.log(paysId + err);
        })
        location.reload();
      
    })

    

  }

  //add Pays
  addPays(pays){
    Swal.fire({
      title: 'Vous voulez ajouter ce pays?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, ajouter!',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        
        this.http.post("http://localhost:8080/payses",pays ,{observe : 'response'} )
        .subscribe(data =>{
          console.log(pays+ data);
        }, err=>{
          console.log(pays + err);
        })

        Swal.fire(
          'Ajouté!',
          'pays ajouté!',
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
