import { Injectable } from '@angular/core';
import { Salle, Ordinateur, Projo } from './materiel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class MaterielService {

   

    constructor(private http: HttpClient) { }

    getSalle(): Observable<Salle> {
        return this.http.get<Salle>('https://2604ac9b.ngrok.io/boot/materiel/salle')
       
    }
    getOrdinateur(): Observable<Ordinateur> {
        return this.http.get<Ordinateur>('https://2604ac9b.ngrok.io/boot/materiel/ordinateur')
       
    }
    getProjo(): Observable<Projo> {
        return this.http.get<Projo>('https://2604ac9b.ngrok.io/boot/materiel/projo')
       
    }
}