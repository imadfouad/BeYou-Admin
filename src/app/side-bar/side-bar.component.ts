import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public activeDash = true;
  public activeUsers = false;
  public activePostes = false;
  public activeComments = false;
  public activeDomaines = false;
  public activeSpecialites = false;
  public activeSections = false;
  public activeVilles=false;
  public activePayses = false;
  public domaines;

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //DOMAINES
    this.http.get("http://localhost:8080/domaines")
        .subscribe(data=>{
          this.domaines = data;
        }, err=>{
          console.log(err);
        })
  }

  redirectHome(){
    this.router.navigateByUrl("/")
  }

  redirectBeyou(){
    window.location.href = "http://localhost:4200"
  }




  activeDashboard(){
    this.activeDash = true;
    this.activeUsers = false;
    this.activePostes = false;
    this.activeComments = false;
    this.activeDomaines = false;
    this.activeSpecialites = false;
    this.activeSections = false;
    this.activePayses = false;
    this.activeVilles = false;
  }

  activeUser(){
    this.activeUsers = true;
    this.activeDash = false;
    this.activePostes = false;
    this.activeComments = false;
    this.activeDomaines = false;
    this.activeSpecialites = false;
    this.activeSections = false;
    this.activePayses = false;
    this.activeVilles = false;
  }

  activePoste(){
    this.activePostes = true;
    this.activeDash = false;
    this.activeUsers = false;
    this.activeComments = false;
    this.activeDomaines = false;
    this.activeSpecialites = false;
    this.activeSections = false;
    this.activePayses = false;
    this.activeVilles = false;
  }

  activeComment(){
    this.activeComments = true;
    this.activeDash = false;
    this.activeUsers = false;
    this.activePostes = false;
    this.activeDomaines = false;
    this.activeSpecialites = false;
    this.activeSections = false;
    this.activePayses = false;
    this.activeVilles = false;
  }

  activeDomaine(){
    this.activeComments = false;
    this.activeDash = false;
    this.activeUsers = false;
    this.activePostes = false;
    this.activeDomaines = true;
    this.activeSpecialites = false;
    this.activeSections = false;
    this.activePayses = false;
    this.activeVilles = false;
  }

  activeSpecialite(){
    this.activeComments = false;
    this.activeDash = false;
    this.activeUsers = false;
    this.activePostes = false;
    this.activeDomaines = false;
    this.activeSpecialites = true;
    this.activeSections = false;
    this.activePayses = false;
    this.activeVilles = false;
  }

  activeSection(){
    this.activeComments = false;
    this.activeDash = false;
    this.activeUsers = false;
    this.activePostes = false;
    this.activeDomaines = false;
    this.activeSpecialites = false;
    this.activeSections = true;
    this.activePayses = false;
    this.activeVilles = false;
  }

  activeVille(){
    this.activeComments = false;
    this.activeDash = false;
    this.activeUsers = false;
    this.activePostes = false;
    this.activeDomaines = false;
    this.activeSpecialites = false;
    this.activeSections = false;
    this.activePayses = false;
    this.activeVilles = true;
  }

  activePays(){
    this.activeComments = false;
    this.activeDash = false;
    this.activeUsers = false;
    this.activePostes = false;
    this.activeDomaines = false;
    this.activeSpecialites = false;
    this.activeSections = false;
    this.activePayses = true;
    this.activeVilles = false;
  }


}
