import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-specialites',
  templateUrl: './specialites.component.html',
  styleUrls: ['./specialites.component.css']
})
export class SpecialitesComponent implements OnInit {
  public domaineId;
  public specialites;
  public domaine;
  public pages;
  public pagesArray;
  public currentPage;
  public selectedOption = '';

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.domaineId = this.route.snapshot.paramMap.get('id')
    
    //domaines
    this.http.get("http://localhost:8080/domaines/"+this.domaineId+"?projection=p8")
        .subscribe(data=>{

          this.domaine = data;
          
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
  


  //charger la page d'ajout section
  addLoad()
  {
    this.router.navigateByUrl("/addSpecialite")
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
    
    //modifier specialite
    modifierSpecialite(specialiteId , specialiteName){
    
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'sp??cialit?? modifi??e!',
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
      deleteSpecialite(specialiteId){
    
    
        Swal.fire({
          title: 'Etes-vous s??re de supprimer cette ville?',
          text: 'Vous ne pourrez plus la r??cuperer !',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, supprimer!',
          cancelButtonText: 'Non'
        }).then((result) => {
          if (result.value) {
            this.http.delete("http://localhost:8080/specialites/"+specialiteId)
            .subscribe(data=>{
              console.log(data);
            },
            err=>{
              console.log(err);
            })
            Swal.fire(
              'Supprim??!',
              'Specialit?? supprim??e!',
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
    
    
      //add specialite
      addSpecialite(specialiteName , DomaineName){
        Swal.fire({
          title: 'Vous voulez ajouter cette sp??cialit???',
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
              'Ajout??!',
              'ville ajout??e!',
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
