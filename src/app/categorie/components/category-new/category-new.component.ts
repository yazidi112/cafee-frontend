import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from '../../services/categorie.service';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.scss']
})
export class CategoryNewComponent implements OnInit {

  constructor(private categoryService: CategoryService,private formBuilder :FormBuilder) { }

  categoryForm!: FormGroup;

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      title: this.formBuilder.control("")
    })
  }

  onCreateProduct(){
    let category = {id:0,title:this.categoryForm.value.title};
    this.categoryService.create(category).subscribe({
      next: data=>alert("category created succefully"),
      error: err=>alert(err)
    })
  }
}
