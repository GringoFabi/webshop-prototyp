import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  @Output('category') category = new EventEmitter<any>();

  categoryForm = new FormGroup({
    title: new FormControl('Title')
  });

  constructor() { }

  ngOnInit(): void {
  }

  addNewCategory() {
    const {title} = this.categoryForm.value;
    const category = {
      title,
    };
    this.category.emit(category);
  }
}
