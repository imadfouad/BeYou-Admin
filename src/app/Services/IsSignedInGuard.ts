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
        this.route.queryParams.subscribe(params => {
            this.param1 = params['tkn'];
        });
    }

    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        let jwtToken =  this.param1;

        let jwtHelper = new JwtHelperService();
        this.roles = jwtHelper.decodeToken(jwtToken).roles;
        
        console.log(jwtToken)

        
        return true;

        /*if(jwtToken != null){
            if(){
                return true;
            }else{
                return false;
            }
            
        }
        else{
            this._router.navigateByUrl("/Connexion")
            return false;
        }*/
            

    }

}