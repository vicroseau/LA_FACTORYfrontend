import { Injectable } from '@angular/core';
import { Formateur } from './humain';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class ModuleHumainService {
    private port = '4833';
    private personneUrl = 'http://localhost:' + this.port + '/boot/personne';
    private formateurUrl = 'http://localhost:' + this.port + '/boot/personne/formateur';

    constructor(private http: HttpClient) { }


    //CRUD Formateur
    getFormateurs(): Observable<Formateur[]> {
        return this.http.get<Formateur[]>(this.formateurUrl)

    }
    getFormateur(id: number): Observable<Formateur> {
        const url = `${this.personneUrl}/${id}`;
        return this.http.get<Formateur>(url);

    }

    addFormateur(formateur: Formateur): Observable<Formateur> {
        console.log(formateur);
        return this.http.post<Formateur>(this.formateurUrl, formateur, httpOptions);
    }

    deleteFormateur(formateur: Formateur): Observable<Formateur> {
        const id = formateur.id;
        const url = `${this.personneUrl}/${id}`;

        return this.http.delete<Formateur>(url, httpOptions);
    }

    updateFormateur(formateur: Formateur): Observable<any> {
        const url = `${this.formateurUrl}/${formateur.id}`;
        return this.http.put(url, formateur, httpOptions);
    } 

} 