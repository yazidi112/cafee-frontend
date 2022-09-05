import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   
  private API_URL = "http://localhost:8080";
  
  
    
  constructor(private httpClient: HttpClient) {}

  getProducts(){
    return  this.httpClient.get<Product[]>(this.API_URL+'/products');
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
