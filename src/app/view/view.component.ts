import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {GoodsService} from "../goods.service";
import {Good} from "../good";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  private good : Good;

  constructor(private activatedRoute : ActivatedRoute, private goodsService : GoodsService , private router : Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
        (params: Params) => {
          this.good = this.goodsService.resolveGood(params['id']);
        }
    );
  }

  deleteGood(good) : void {
    if (confirm("Вы действительно хотите удалить товар ?")) {
      this.goodsService.deleteGood(good);
      this.router.navigateByUrl("products");
    }
  }

  goBack() : void {
    this.router.navigateByUrl("products");
  }

}
