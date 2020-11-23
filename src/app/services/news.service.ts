import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
const params=new HttpParams().set('apiKey',apiKey);

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  rUrl: string ;
  constructor(private http:HttpClient) { }
  getData(url){
    this.rUrl=apiUrl+"/"+url+"&apiKey="+apiKey
    console.log("this.rUrl: ", this.rUrl); 
    return this.http.get(this.rUrl).pipe(
      tap(value=>{
        console.log(value)
      })
    );
  }
  // getData(url) {
  //   return this.http.get(`${apiUrl}/${url}`, { params }).pipe(
  //     tap(value => {
  //       console.log(value);
  //     })
  //   );
  // }
}
