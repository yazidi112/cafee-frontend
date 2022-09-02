import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../modles/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   
  products!: Product[];
    
  constructor() { 
    this.products = this.products = [
      {id:1,name:"cd",price:34},
      {id:2,name:"dvd",price:124},
      {id:3,name:"pc",price:300}
    ]
  }

  getProducts():Observable<Product[]>{
    return of(this.products);
  }

  getProductById(id:number):Product|undefined{
    let product = this.products.find((p)=>p.id==id);
    if(product)
      return product;
    return undefined;
  }

  deleteProduct(p:Product){
    let index = this.products.indexOf(p);
    this.products.splice(index,1)
  }

  addNewProduct(product: Product):boolean{
    if(product){
      this.products.push(product);
      return true;
    }
    return false;
  }

  updateProduct(product: Product){
    if(product){
      this.products=this.products.map(p=>(p.id==product.id)?product:p);
      return true;
    }
    return false;
  }
}
