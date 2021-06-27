import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate {
    param1
    roles;

    constructor(private _router: Router , private route: ActivatedRoute ) {
        
    }

    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        let jwtToken = localStorage.getItem('token') ;

        if(jwtToken != null){
            return true;
        }
        else{
            this._router.navigateByUrl("/")
            return false;
        }
            

    }

}