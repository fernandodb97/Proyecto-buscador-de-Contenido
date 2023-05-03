import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Multimedia, SearchResponse, Rating } from '../interfaces/multi.interfaces';

@Injectable({providedIn: 'root'})
export class MultimediaService {

  //026. SE CREA INSTANCIA DE OBJETO Multimedia
  public multiList: Multimedia[] = [];
  //public banner: Multimedia[] = [];
  
  //012. SE DEFINE LISTA DE stringS LLAMADA _taghistorial
  private _taghistorial: string[] = [];
  
  //022. API DEFINIDA PARA GIFS CON VARIABLES serviceUrl Y __apikey 
  private __apikey:string ='rNoJq3U9e3EximexGxprnxsplW5Rp9TL';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs/';

  //018. SE OCUPA FUNCION LLAMADA POR algo()
  private algo(tag:string){
    
    //019. CONVIERTE CARACTERES A MINUSCULA
    tag=tag.toLowerCase();

    //020. SI YA EXISTE EN EL HISTORIAL SE FILTRARA
    if(this._taghistorial.includes(tag)){
      this._taghistorial =this._taghistorial.filter((oldTag) => oldTag !== tag); 
    }

    //021. SE AGREGA EÑ TAG AL HISTORIAL
    this._taghistorial.unshift(tag);
  }

  

  //023. SE UTILIZA CONSTRUCTOR PARA CREAR OBJETO http CON IMPORTACION HTTP
  constructor(private http:HttpClient ) { }

  //011. SE OCUPA FUNCION get INTERNA PARA LLAMAR taghistorial
  get taghistorial() {
    return [...this._taghistorial];
  }

  //015. SE OCUPA FUNCION LLAMADA A TRAVES DE buscarTag()
  //033.
  buscarTag( tag: string){
    
    //016. SI SE ENTREGA VARIABLE VACIA NO RETORNARA NADA
    if(tag === '')return;
    //this._taghistorial.unshift(tag);
    
    //017. SE LLAMA A FUNCION .algo()
    this.algo(tag);
    //console.log(this.taghistorial);
    
    //020. SE CREA OBJETO CONSTANTE DE TIPO HttpParams() CON IMPORTACION HTTP
    //021. CON UN APIKEY DEFINIDA, UN LIMITE DE 5 BUSQUEDAS Y PARAMETRO DE BUSQUEDA q (DE QUERY) 
    const params = new HttpParams()
      .set('apikey', this.__apikey)
      .set('limit', '5')
      .set('q', tag)
      
    //022. SE UTILIZA VARIABLE http
    //024. SE UTILIZA FUNCION get PARA BUSCAR DE LA INTERFAZ SearchResponse Y SUBSCRIBIRSE BAJO VARIABLES DEFINIDAS  
    this.http.get<SearchResponse>(`${this.serviceUrl}search`,{params}).subscribe(
      
      //025. SE UTILIZA resp DE TIPO SearchResponse COMO PROMESA PARA INGRESAR EN OBJETO multiList EL .data  
      resp => {
        this.multiList = resp.data
        console.log({multiX: this.multiList})
      }
    )
  }

}
