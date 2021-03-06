import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})
export class CommentairesComponent implements OnInit {

  public commentaires;
  public userPoste;
  public pages;
  public pagesArray;
  public currentPage;
  public commentairesLength;
  public size=5;
  public page=0;


  constructor(private http:HttpClient) { }

  ngOnInit(): void {

        //commentaires
        this.http.get("http://localhost:8080/getCommentairesSignales")
        .subscribe(data=>{
          this.commentaires = data;     
        }, err=>{
          console.log(err);
        })

        //length commentaires signales
        this.http.get("http://localhost:8080/getCommentairesSignalesLength")
        .subscribe(data=>{
          this.commentairesLength = data;
          this.commentairesLength = this.commentairesLength as Number;
        }, err=>{
          console.log(err);
        })

        //pages
        this.http.get("http://localhost:8080/getCommentairesSignales")
        .subscribe(data=>{
          this.pages = data;
          console.log(this.pages.length)
          this.pagesArray = new Array(Math.ceil(this.commentairesLength/(this.pages.length)))   //changer 20 par size
        }, err=>{
          console.log(err);
        })

  }


  //size on select
  onChange(size){
    console.log(size.value)
    this.size = size.value;
    //commentaires
    this.http.get("http://localhost:8080/getCommentairesSignales?size="+size.value+"&page="+this.page)
    .subscribe(data=>{
      this.commentaires = data;
      this.pagesArray = new Array(Math.ceil(this.commentairesLength/(this.size)))
      console.log(Math.ceil(this.commentairesLength/this.size))
    }, err=>{
      console.log(err);
    })
}

  //pagination
  pageCommentaires(i){
    this.currentPage=i;
    this.http.get("http://localhost:8080/getCommentairesSignales?page="+i+"&projection=p3")
    .subscribe(data=>{
      this.commentaires = data;
    }, err=>{
      console.log(err);
    })
  }


  //supprimer un utilisateur
  deleteCommentaire(commentaireId){


    Swal.fire({
      title: 'Etes-vous s??re de supprimer ce poste?',
      text: 'Vous ne pourrez plus le r??cuperer !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        this.http.delete("http://localhost:8080/commentaires/"+commentaireId)
        .subscribe(data=>{
          console.log(data);
        },
        err=>{
          console.log(err);
        })
        Swal.fire(
          'Supprim??!',
          'poste supprim??!',
          'success'
        )
        location.reload();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annul??',
          '',
          'error'
        )
      }
    })

    
  }

}
