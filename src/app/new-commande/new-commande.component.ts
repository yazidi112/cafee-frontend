import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../modles/product';
import { AuthenticationService } from '../services/authentication.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-new-commande',
  templateUrl: './new-commande.component.html',
  styleUrls: ['./new-commande.component.scss']
})
export class NewCommandeComponent implements OnInit {

  products!: Product[];
  errorMessage!: String;

  constructor(
    private productService: ProductService,
    public authenticationService : AuthenticationService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next:(data)=>{
        this.products = data;
      },
      error:(err)=>{
        this.errorMessage = "erruer"
      }
    })
  }

  deleteProduct(p:Product){
    this.productService.deleteProduct(p)
  }

  editProduct(id: Number){
    this.router.navigateByUrl("admin/editProduct/"+id);
  }

}
