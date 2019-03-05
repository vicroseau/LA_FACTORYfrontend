import { Injectable } from '@angular/core';
import { Salle, Ordinateur, Projecteur } from './materiel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class MaterielService {

   

    constructor(private http: HttpClient) { }

    getSalle(): Observable<Salle> {
        return this.http.get<Salle>('http://127.0.0.1:3348/boot/materiel/salle')
       
    }
     getOrdinateur(): Observable<Ordinateur> {
        return this.http.get<Ordinateur>('http://127.0.0.1:3348/boot/materiel/ordinateur')
       
    }
    getProjecteur(): Observable<Projecteur> {
        return this.http.get<Projecteur>('http://127.0.0.1:3348/boot/materiel/projecteur')
       
    }
} 