import { Component,   OnInit   } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { FlashMessageService } from 'src/app/shared/services/flash-message.service';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/categorie.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  p: number = 1; 
  categories!: Category[];
  totalElements: number = 0;
  private searchTerms = new Subject<string>();

  constructor(private categoryService : CategoryService,
             private flashMessage: FlashMessageService,
             private router: Router
            ) { }

  ngOnInit(): void {
    this.getCategories({ page: "0", size: "5" });
    this.onSearch();
  }

  onSearch(){
    this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term=>this.categoryService.search(term))
    ).subscribe({
      next: (data)=>this.categories = data,
      error: (err)=> this.flashMessage.show(err)
    })
  }

  search(term: string){
    this.searchTerms.next(term);
  }

  getCategories(request:{}){
    this.categoryService.getCategories(request).subscribe({
      next: (data)=>{
        this.categories = data['content'];
        this.totalElements = data['totalElements'];
      },
      error: (err)=>{
        this.flashMessage.show(err);
        console.log(err);
      } 
    })
  }

  nextPage(event: PageEvent) {
    console.log(event);
    const request = {page:event.pageIndex.toString(),size:event.pageSize.toString()};
    this.getCategories(request);
  }

  onDelete(id:number){
    let isConfirmed: boolean = confirm("Vous êtes sûr de vouloir supprimer cette catégorie ?");
    if(!isConfirmed)
      return;
      
    this.categoryService.delete(id).subscribe({
      next:data=>{
        this.flashMessage.show("delete succefully");
        this.categories = this.categories.filter(categroy=>categroy.id!==id);
      },
      error: err=>this.flashMessage.show(err)
    });
  }

  onEdit(id: number){
    this.router.navigateByUrl("admin/categories/edit/"+id);
  }

}
 
