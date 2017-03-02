import { Component, OnInit } from '@angular/core';
import {GoodsService} from "../goods.service";
import {Good} from "../good";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(private goodsService : GoodsService, private router:Router) { }

  
  getGoods() : Good[] {
    return this.goodsService.getGoods();
  }

  editGood(id) : void {
    this.router.navigateByUrl("products/"+id+"/edit");
  }

  viewGood(id) : void {
    this.router.navigateByUrl("products/"+id);
  }

  deleteGood(good) : void {
    if (confirm("Вы действительно хотите удалить товар ?")) {
      this.goodsService.deleteGood(good);
    }
  }


  ngOnInit() {

    if (this.goodsService.getGoods().length == 0) {
      let good = new Good();
      good.sku = 1;
      good.name = "SampleNameOfGood";
      good.createdAt = new Date();
      good.price = 1550;
      this.goodsService.addGood(good);
    }

  }

}
