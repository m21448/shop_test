import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RouterModule }   from '@angular/router';
import { ListComponent } from './list/list.component';
import {GoodsService} from "./goods.service";
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ListComponent,
        EditComponent,
        ViewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: AppComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'products',
                component: ListComponent
            },
            {
                path: 'products/:id/edit',
                component: EditComponent
            },
            {
                path: 'products/:id',
                component: ViewComponent
            }
        ])
    ],
    providers: [GoodsService],
    bootstrap: [AppComponent]
})

export class AppModule { }
