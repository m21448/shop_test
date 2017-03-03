import { Injectable } from '@angular/core';
import {Good} from "./good";

@Injectable()
export class GoodsService {

    constructor() { }

    private goods : Good[] = [];


    public resolveGood(id : number) : Good {

        for(var i = 0; i < this.goods.length; i++){
            var item : Good = this.goods[i];
            if (item.sku == id) {
                return item;
            }
        }
        
        //create Empty
        let good : Good = new Good();
        good.createdAt = new Date();
        return good;
    };

    public getGoods() : Good[] {
        return this.goods;
    };

    public addGood(good : Good) : void {
        this.goods.push(good);
    }

    public deleteGood(good : Good) : void {

        if (this.goods.indexOf(good) == -1) {
            alert("Товар не найден");
        } else {
            this.goods.splice(this.goods.indexOf(good),1);
        }
    }

    public isFirstRun : boolean = true;

}
