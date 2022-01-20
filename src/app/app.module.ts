import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/app.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes : Routes = [
  {path : 'appareils' , canActivate:[AuthGuard] , component : AppareilViewComponent } , 
  {path : 'appareils/:id' , canActivate:[AuthGuard],  component : SingleAppareilComponent } , 
  {path:'auth' , component : AuthComponent} , 
  {path: '' , component:AppareilViewComponent},
  {path: 'not-found' , component:FourOhFourComponent},
  {path: 'users' , component:UserListComponent},
  {path: 'addusers' , component:NewUserComponent},
  {path: 'edit' , canActivate:[AuthGuard] , component:EditAppareilComponent},
  {path: '**' , redirectTo:'/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService ,
    AuthService , 
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
