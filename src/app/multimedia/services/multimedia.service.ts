import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MultimediaService {

  private _taghistorial: string[] = []

  constructor() { }

  get taghistorial() {
    return [...this._taghistorial];
  }

  buscarTag( tag: string){
    this._taghistorial.unshift(tag);

    console.log(this.taghistorial);
  }

}
