import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-postesignales',
  templateUrl: './postesignales.component.html',
  styleUrls: ['./postesignales.component.css']
})
export class PostesignalesComponent implements OnInit {

  public postes;
  public userPoste;
  public pages;
  public pagesArray;
  public currentPage;
  public postesLength;
  public size=5;
  public page=0;

  constructor(private http:HttpClient) { }

  
  ngOnInit(): void {
    //postes
    this.http.get("http://localhost:8080/getPostesSignales")
    .subscribe(data=>{
      this.postes = data;
    }, err=>{
      console.log(err);
    })

    //length postes signales
    this.http.get("http://localhost:8080/getPostesSignalesLength")
    .subscribe(data=>{
      this.postesLength = data;
      this.postesLength = this.postesLength as Number;
    }, err=>{
      console.log(err);
    })

    //pages
    this.http.get("http://localhost:8080/getPostesSignales")
    .subscribe(data=>{
      this.pages = data;
      console.log(this.pages.length)
      this.pagesArray = new Array(Math.ceil(this.postesLength/(this.pages.length)))   //changer 20 par size
    }, err=>{
      console.log(err);
    })

}

  //size on select
  onChange(size){
      console.log(size.value)
      this.size = size.value;
      //postes
      this.http.get("http://localhost:8080/getPostesSignales?size="+size.value+"&page="+this.page)
      .subscribe(data=>{
        this.postes = data;
        this.pagesArray = new Array(Math.ceil(this.postesLength/(this.size)))
        console.log(Math.ceil(this.postesLength/this.size))
      }, err=>{
        console.log(err);
      })
  }


//pagination
pagePostes(i){
  this.page = i
this.currentPage=i;
this.http.get("http://localhost:8080/getPostesSignales?page="+i+"&size="+this.size)
.subscribe(data=>{
  this.postes = data;
}, err=>{
  console.log(err);
})
}


//supprimer un utilisateur
deletePoste(posteId){


Swal.fire({
  title: 'Etes-vous sûre de supprimer ce poste?',
  text: 'Vous ne pourrez plus le récuperer !',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Oui, supprimer!',
  cancelButtonText: 'Non'
}).then((result) => {
  if (result.value) {
    this.http.delete("http://localhost:8080/postes/"+posteId)
    .subscribe(data=>{
      console.log(data);
    },
    err=>{
      console.log(err);
    })
    Swal.fire(
      'Supprimé!',
      'poste supprimé!',
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
