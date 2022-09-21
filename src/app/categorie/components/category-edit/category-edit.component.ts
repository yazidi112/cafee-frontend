import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FlashMessageComponent } from 'src/app/shared/components/flash-message/flash-message.component';
import { FormService } from 'src/app/shared/form.service';
import { FlashMessageService } from 'src/app/shared/services/flash-message.service';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/categorie.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  categoryForm!: FormGroup<any>;
  category!: Category ;
  id!: number;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private categoryService: CategoryService,
      private flash: FlashMessageService,
      private formError: FormService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoryService.getCategoryById(this.id).subscribe({
      next: category=> {
        this.categoryForm = this.formBuilder.group({
          id: this.formBuilder.control( category.id,Validators.required),
          title: this.formBuilder.control( category.title,[
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50)
          ])
        });
      },
      error: err=> this.flash.show(err,{type:'error',timeout:1000})
    });
  }

  onFormError(control: AbstractControl) {
    return this.formError.getFormControlError(control);
  }

  onUpdateCatgorie() {
    this.category = {id:this.categoryForm.value.id,title:this.categoryForm.value.title};
    this.categoryService.update(this.category,this.id).subscribe({
      next:data=>this.flash.show("product updated"),
      error: err=>this.flash.show("error while update product")
    });
  }

   

}

