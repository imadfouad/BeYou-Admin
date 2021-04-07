import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  
  
  public specialites;
  public domaines;
  public pages;
  public pagesArray;
  public currentPage;
  public selectedOption = '';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    
    //pays
    this.http.get("http://localhost:8080/domaines?size=10")
        .subscribe(data=>{

          this.domaines = data;
          
        }, err=>{
          console.log(err);
        })



        //pagination

        
        //pages
        this.http.get("http://localhost:8080/specialites?projection=p4")
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

//scroll
onScroll(){
  console.log("scrolled")
}
  

      //pagination
      pageVilles(i){
        this.currentPage=i;
        this.http.get("http://localhost:8080/specialites?page="+i+"&projection=p4")
        .subscribe(data=>{
          this.specialites = data;
        }, err=>{
          console.log(err);
        })
      }
    
    //modifier Ville
    modifierSpecialite(specialiteId , specialiteName){
    
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'spécialité modifiée!',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
    
          this.http.patch("http://localhost:8080/specialites/"+specialiteId ,specialiteName ,{observe : 'response'} )
          .subscribe(data =>{
            console.log(specialiteId+ data);
          }, err=>{
            console.log(specialiteId + err);
          })
          location.reload();
        
      })
    
      
    
    }
    
      //supprimer une ville
      deleteSpecialite(specialiteName){
    
    
        Swal.fire({
          title: 'Etes-vous sûre de supprimer cette ville?',
          text: 'Vous ne pourrez plus la récuperer !',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, supprimer!',
          cancelButtonText: 'Non'
        }).then((result) => {
          if (result.value) {
            this.http.delete("http://localhost:8080/specialites/"+specialiteName)
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
      addSpecialite(specialiteName , DomaineName){
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
            .set('specialiteName',specialiteName.specialiteName)
            .set('domaineName', DomaineName);

            this.http.get("http://localhost:8080/addSpecialite",{params: params} )
            .subscribe(data =>{
              console.log(specialiteName+ data);
            }, err=>{
              console.log(specialiteName + err);
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

      //getSpecialites
      getSpecialites(domaineName){
        console.log("hahah "+domaineName)
        let params = new HttpParams()
        .set('domaineName', domaineName);

        this.http.get("http://localhost:8080/getSpecialites",{params: params})
        .subscribe(data=>{
          console.log("hahah "+data)
          this.specialites = data;
        },err=>{
          console.log(err)
        })
      }
    

}
