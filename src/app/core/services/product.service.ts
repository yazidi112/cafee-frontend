import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
      
  constructor(private httpClient: HttpClient) {}

  getProducts(){
    return  this.httpClient.get<Product[]>(environment.apiUrl+'/api/products');
  }

  getProductById(id:number){
   
  }

  deleteProduct(p:Product){
    
  }

  addNewProduct(product: Product){
   
  }

  updateProduct(product: Product){
    
  }
}
