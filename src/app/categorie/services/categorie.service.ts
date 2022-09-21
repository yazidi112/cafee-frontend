import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  

  constructor(private http: HttpClient) { }

  getCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(environment.apiUrl+'/api/categories');
  }

  search(term: string) : Observable<Category[]> {
    if(term == "")
      return this.getCategories();
      
    return this.http.get<Category[]>(environment.apiUrl+'/api/search/categories/'+term);
  }

  create(category: Category): Observable<Category>{
    return this.http.post<Category>(environment.apiUrl+'/api/category',category);
  }

  delete(id:number):Observable<boolean>{
    return this.http.delete<boolean>(environment.apiUrl+'/api/category/'+id);
  }
}
