import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  public name = '';
  constructor(private http: HttpClient) {

  };

  public getAllCharacters(): Observable<any> {
    return this.http.get<any>(`https://rickandmortyapi.com/api/character}`);
    }

  public getOneCharacter(id: number): Observable<any> {
    return this.http.get<any>(`https://rickandmortyapi.com/api/character/${id}`);
  }

  public getAllCharactersByName(name: string, page?: number): Observable<any> {

    let params = new HttpParams().set('name', name);
    if(page){
      params = new HttpParams().set('name', name).set('page', page);
    }

    return this.http.get<any>(`https://rickandmortyapi.com/api/character`, {params: params});
  }

  public setInput(name: string){
    this.name = name;
  }

  public getInput() {
    return this.name;
  }
}
