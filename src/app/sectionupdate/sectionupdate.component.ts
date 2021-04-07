import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sectionupdate',
  templateUrl: './sectionupdate.component.html',
  styleUrls: ['./sectionupdate.component.css']
})
export class SectionupdateComponent implements OnInit {

  public sectionId;
  public section;

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sectionId = this.route.snapshot.paramMap.get('sectionId')
    this.http.get("http://localhost:8080/sections/"+this.sectionId)
    .subscribe(data=>{

      this.section = data;
      
    }, err=>{
      console.log(err);
    })

  }

  //modifier section 
  modifierSection(form){
    console.log(form)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'section modifiée!',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {

        this.http.patch("http://localhost:8080/sections/"+form.id ,form )
        .subscribe(data =>{
        }, err=>{
        })
        //location.reload();
      
    })
  }

}
