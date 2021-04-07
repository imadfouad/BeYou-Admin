import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.css']
})
export class VillesComponent implements OnInit {


  
  
  public villes;
  public payses;
  public pages;
  public pagesArray;
  public currentPage;
  public selectedOption = '';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    
    //pays
    this.http.get("http://localhost:8080/payses?size=194")
        .subscribe(data=>{
            console.log("pays" + data)
          this.payses = data;

        }, err=>{
          console.log(err);
        })

        //pages
        this.http.get("http://localhost:8080/villes?projection=p5")
        .subscribe(data=>{
          this.pages = data;
          console.log(this.pages.page.totalPages)
          this.pagesArray = new Array(this.pages.page.totalPages)
        }, err=>{
          console.log(err);
        })
  }

  
  activeTable(event){
    this.selectedOption = event.target.value;
    console.log(this.selectedOption)

  }



      //pagination
      pageVilles(i){
        console.log("hahah ")
        this.http.get("http://localhost:8080/villes?page="+i+"&projection=p5")
        .subscribe(data=>{
          this.villes = data;
        }, err=>{
          console.log(err);
        })
      }
    
    //modifier Ville
    modifierVille(villeId , villeName){
    
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'spécialité modifiée!',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
    
          this.http.patch("http://localhost:8080/villes/"+villeId ,villeName ,{observe : 'response'} )
          .subscribe(data =>{
            console.log(villeId+ data);
          }, err=>{
            console.log(villeId + err);
          })
          location.reload();
        
      })
    
      
    
    }
    
      //supprimer une ville
      deleteVille(villeName){
    
    
        Swal.fire({
          title: 'Etes-vous sûre de supprimer cette ville?',
          text: 'Vous ne pourrez plus la récuperer !',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, supprimer!',
          cancelButtonText: 'Non'
        }).then((result) => {
          if (result.value) {
            this.http.delete("http://localhost:8080/villes/"+villeName)
            .subscribe(data=>{
              console.log(data);
            },
            err=>{
              console.log(err);
            })
            Swal.fire(
              'Supprimé!',
              'ville supprimée!',
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
    
    
      //add ville
      addVille(villeName, paysName){
        Swal.fire({
          title: 'Vous voulez ajouter cette ville?',
          text: '',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, ajouter!',
          cancelButtonText: 'Non'
        }).then((result) => {
          if (result.value) {
            
            let params = new HttpParams()
            .set('villeName',villeName.villeName)
            .set('paysName', paysName);

            this.http.get("http://localhost:8080/addVille",{params: params} )
            .subscribe(data =>{
              console.log(villeName+ data);
            }, err=>{
              console.log(villeName + err);
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

      //getVilles
      getVilles(paysName){
        console.log("htrdt")
        let params = new HttpParams()
        .set('paysName', paysName);

        this.http.get("http://localhost:8080/getVilles",{params: params})
        .subscribe(data=>{
          console.log(data)
          this.villes = data;
        },err=>{
          console.log(err)
        })
      }
    


}
