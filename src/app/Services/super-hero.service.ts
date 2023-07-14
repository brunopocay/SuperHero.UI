import { Injectable } from '@angular/core';
import { SuperHero } from '../Models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  private url = "SuperHero";

  constructor(private http: HttpClient) { }

  public GetSuperHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${environment.apiURL}/${this.url}`)   
  }

  public CreateSuperHero(hero: SuperHero): Observable<SuperHero[]>{
    return this.http.post<SuperHero[]>(`${environment.apiURL}/${this.url}`, hero)
  }

  public UpdateSuperHero(hero: SuperHero): Observable<SuperHero[]>{
    return this.http.put<SuperHero[]>(`${environment.apiURL}/${this.url}`, hero)
  }

  public DeleteSuperHero(hero: SuperHero): Observable<SuperHero[]>{
    return this.http.delete<SuperHero[]>(`${environment.apiURL}/${this.url}/${hero.id}`)
  }

}
