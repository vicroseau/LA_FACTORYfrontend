import { Injectable } from '@angular/core';
import { Formateur } from './formateur';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class FormateurService {

   

    constructor(private http: HttpClient) { }

    getFormateur(): Observable<Formateur> {
        return this.http.get<Formateur>('http://127.0.0.1:3348/boot/personne')
       
    }
     
} 