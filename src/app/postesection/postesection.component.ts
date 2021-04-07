import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-postesection',
  templateUrl: './postesection.component.html',
  styleUrls: ['./postesection.component.css']
})
export class PostesectionComponent implements OnInit {

  public postes;
  public userPoste;
  public pages;
  public pagesArray;
  public currentPage;
  public sectionName;


  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
        this.sectionName = this.route.snapshot.paramMap.get('sectionName')
        this.http.get("http://localhost:8080/getPostes?sectionName="+this.sectionName)
        .subscribe(data=>{

          this.postes = data;
          
        }, err=>{
          console.log(err);
        })

        //pages
        this.http.get("http://localhost:8080/postes")
        .subscribe(data=>{
          this.pages = data;
          console.log(this.pages.page.totalPages)
          this.pagesArray = new Array(this.pages.page.totalPages)
        }, err=>{
          console.log(err);
        })

  }


  //pagination
  pagePostes(i){
    this.currentPage=i;
    this.http.get("http://localhost:8080/postes?page="+i+"&projection=p2")
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
