import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MultimediaService {

  private _taghistorial: string[] = [];

  private algo(tag:string){
    tag=tag.toLowerCase();
    if(this._taghistorial.includes(tag)){

      this._taghistorial =this._taghistorial.filter((oldTag) => oldTag !== tag); 
    }

    this._taghistorial.unshift(tag);
  }

  private __apikey:string ='rNoJq3U9e3EximexGxprnxsplW5Rp9TL';


  constructor() { }

  get taghistorial() {
    return [...this._taghistorial];
  }

  buscarTag( tag: string){
    if(tag === '')return;
    //this._taghistorial.unshift(tag);
    this.algo(tag);
    console.log(this.taghistorial);
  }

}
