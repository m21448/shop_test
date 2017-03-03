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
import { environment } from 'environments/environment';

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
                path: environment.baseUrl + 'login',
                component: LoginComponent
            },
            {
                path: environment.baseUrl + 'products',
                component: ListComponent
            },
            {
                path: environment.baseUrl + 'products/:id/edit',
                component: EditComponent
            },
            {
                path: environment.baseUrl + 'products/:id',
                component: ViewComponent
            }
        ])
    ],
    providers: [GoodsService],
    bootstrap: [AppComponent]
})

export class AppModule { }
