import { Injectable } from '@angular/core';
import { Salle, Ordinateur, Projecteur } from './materiel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class MaterielService {
    private port = '4833';
    private materielUrl = 'http://localhost:' + this.port + '/boot/materiel';
    private ordinateurUrl = 'http://localhost:' + this.port + '/boot/materiel/ordinateur';
    private projecteurUrl = 'http://localhost:' + this.port + '/boot/materiel/projecteur';
    private salleUrl = 'http://localhost:' + this.port + '/boot/materiel/salle';

    constructor(private http: HttpClient) { }


    //CRUD ORDINATEUR
    getOrdinateurs(): Observable<Ordinateur[]> {
        return this.http.get<Ordinateur[]>(this.ordinateurUrl)

    }
    getOrdinateur(id: number): Observable<Ordinateur> {
        const url = `${this.materielUrl}/${id}`;
        return this.http.get<Ordinateur>(url);

    }

    addOrdinateur(ordinateur: Ordinateur): Observable<Ordinateur> {
        console.log(ordinateur);
        return this.http.post<Ordinateur>(this.ordinateurUrl, ordinateur, httpOptions);
    }

    deleteOrdinateur(ordinateur: Ordinateur): Observable<Ordinateur> {
        const id = ordinateur.code;
        const url = `${this.materielUrl}/${id}`;

        return this.http.delete<Ordinateur>(url, httpOptions);
    }

    updateOrdinateur(ordinateur: Ordinateur): Observable<any> {
        const url = `${this.ordinateurUrl}/${ordinateur.code}`;
        return this.http.put(url, ordinateur, httpOptions);
    } 


    //CRUD PROJECTEUR
    getProjecteurs(): Observable<Projecteur[]> {
        return this.http.get<Projecteur[]>(this.projecteurUrl)

    }
    getProjecteur(id: number): Observable<Projecteur> {
        const url = `${this.materielUrl}/${id}`;
        return this.http.get<Projecteur>(url);

    }

    addProjecteur(projecteur: Projecteur): Observable<Projecteur> {
        console.log(projecteur);
        return this.http.post<Projecteur>(this.projecteurUrl, projecteur, httpOptions);
    }

    deleteProjecteur(projecteur: Projecteur): Observable<Projecteur> {
        const id = projecteur.code;
        const url = `${this.materielUrl}/${id}`;

        return this.http.delete<Projecteur>(url, httpOptions);
    }

    updateProjecteur(projecteur: Projecteur): Observable<any> {
        const url = `${this.projecteurUrl}/${projecteur.code}`;
        return this.http.put(url, projecteur, httpOptions);
    } 


    //CRUD SALLE
    getSalles(): Observable<Salle[]> {
        return this.http.get<Salle[]>(this.salleUrl)

    }
    getSalle(id: number): Observable<Salle> {
        const url = `${this.materielUrl}/${id}`;
        return this.http.get<Salle>(url);

    }

    addSalle(salle: Salle): Observable<Salle> {
        console.log(salle);
        return this.http.post<Salle>(this.salleUrl, salle, httpOptions);
    }

    deleteSalle(salle: Salle): Observable<Salle> {
        const id = salle.code;
        const url = `${this.materielUrl}/${id}`;

        return this.http.delete<Salle>(url, httpOptions);
    }

    updateSalle(salle: Salle): Observable<any> {
        const url = `${this.salleUrl}/${salle.code}`;
        return this.http.put(url, salle, httpOptions);
    } 


} 