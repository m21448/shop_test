import {Component, OnInit, ViewChild} from '@angular/core';
import {Good} from "../good";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {GoodsService} from "../goods.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'environments/environment';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  goodForm: FormGroup;
  public good : Good;
  isEdit : boolean = false;

  constructor(
      private route : ActivatedRoute,
      private goodsService : GoodsService,
      private router : Router,
      private fb: FormBuilder
  )
  {
    this.createForm();
  }

  createForm() : void {

    this.route.params.subscribe(
        (params: Params) => {

          this.good = this.goodsService.resolveGood(params['id']);
          this.isEdit = this.good.sku ? true : false;

          this.goodForm = this.fb.group({
            sku: [{value : this.good.sku, disabled : this.isEdit}, Validators.required],
            name: [this.good.name, Validators.required],
            price: [this.resolvePrice(this.good.price), [Validators.required, Validators.pattern(/^\-?\d+((\.|\,)\d+)?$/)]],
          });

          this.goodForm.valueChanges
              .subscribe(data => this.onValueChanged(data));

          this.onValueChanged(); // forReset
        }
    );
  }

  private resolvePrice(num : number) : number {
    if (num && num > 0) {
      return num / 100;
    } else {
      return 0;
    }
  }

  onSubmit() : void {

    this.good.price = Math.round(this.goodForm.value["price"] * 100);
    console.log(this.goodForm.get("price").setValue(this.good.price / 100));

    if (!this.isEdit) {
      this.goodsService.addGood(this.good);
      this.isEdit = true;
    }
  }

  goBack() : void {
    this.router.navigateByUrl(environment.baseUrl + "products");
  }


  onValueChanged(data?: any) {
    if (!this.goodForm) { return; }
    const form = this.goodForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'sku': '',
    'name': '',
    'price': ''
  };

  validationMessages = {
    'sku': {
      'required': 'Sku is required.'
    },
    'name': {
      'required': 'Name is required.'
    },
    'price': {
      'required': 'Price is required.',
      'pattern': 'Price must be the number.'
    }
  };

  ngOnInit() {

  }

}
