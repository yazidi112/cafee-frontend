import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/categorie.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories!: Category[];
  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (data)=>this.categories = data,
      error: (err)=> alert(err)
    })
  }

}
