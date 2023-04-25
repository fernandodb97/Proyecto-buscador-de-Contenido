import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Multimedia, SearchResponse, Rating } from '../interfaces/multi.interfaces';

@Injectable({providedIn: 'root'})
export class MultimediaService {

  public multiList: Multimedia[] = [];
  public banner: Multimedia[] = [];
  
  private _taghistorial: string[] = [];
  private __apikey:string ='rNoJq3U9e3EximexGxprnxsplW5Rp9TL';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs/';

  private algo(tag:string){
    tag=tag.toLowerCase();
    if(this._taghistorial.includes(tag)){

      this._taghistorial =this._taghistorial.filter((oldTag) => oldTag !== tag); 
    }

    this._taghistorial.unshift(tag);
  }

  


  constructor(private http:HttpClient ) { }

  get taghistorial() {
    return [...this._taghistorial];
  }

  buscarTag( tag: string){
    if(tag === '')return;
    //this._taghistorial.unshift(tag);
    this.algo(tag);
    console.log(this.taghistorial);
    const params = new HttpParams()
      .set('apikey', this.__apikey)
      .set('limit', '5')
      .set('q', tag)  
    this.http.get<SearchResponse>(`${this.serviceUrl}search`,{params}).subscribe(
      resp => {
        
        
        this.multiList = resp.data
        
        
        console.log({multi: this.multiList})
      }
    )
  }

}
