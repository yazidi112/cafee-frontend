import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/shared/form.service';
import { FlashMessageComponent } from 'src/app/shared/components/flash-message/flash-message.component';
import { FlashMessageService } from 'src/app/shared/services/flash-message.service';
import { CategoryService } from '../../services/categorie.service';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.scss']
})
export class CategoryNewComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private formBuilder :FormBuilder,
    private formService: FormService,
    private flash: FlashMessageService
  ) { }

  categoryForm!: FormGroup;

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      title: this.formBuilder.control("",[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])
    })
  }

  onCreateProduct(){
    let category = {id:0,title:this.categoryForm.value.title};
    this.categoryService.create(category).subscribe({
      next: data=>this.flash.show("Category created successfully"),
      error: err=>this.flash.show(err,{type:'error',timeout:1000})
    })
  }

  onFormError(control: AbstractControl){
    return this.formService.getFormControlError(control);
  }
}
