import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card'
import {ProjectService} from './project.service';

import { Error404Component } from './error404/error404.component';
import { HomeComponent} from './home/home.component';
import { MenuComponent} from './menu/menu.component';
import { AppComponent } from './app.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employeelist/employeelist.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import {EditprojectComponent} from './editproject/editproject.component';
import {AddprojectComponent} from './addproject/addproject.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { AddVacancyComponent } from './addvacancy/addvacancy.component';
import { EditVacancyComponent } from './edit-vacancy/edit-vacancy.component';
import { VacancyService } from './vacancy.service';
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFireDatabaseModule} from '@angular/fire/database'
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"Home",component:HomeComponent},
  {path:"Menu",component:MenuComponent},
  { path:"Employees", component:EmployeeListComponent},
  { path:"AddEmployee", component:AddemployeeComponent },
  { path:"EditEmployee/:id", component:EditemployeeComponent },
  {path:"error",component:Error404Component},
  {path:"project",component:ProjectsComponent},
  {path:"addproject",component:AddprojectComponent},
  {path:"editproject/:id",component:EditprojectComponent},
  {path:"vacancy",component:VacancyComponent},
  {path:"addvacancy",component:AddVacancyComponent},
  {path:"editvacancy/:id",component:EditVacancyComponent},
  { path:"**", redirectTo:'error' },
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    EmployeedetailComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    EmployeeListComponent,
    Error404Component,
    ProjectsComponent,
    AddprojectComponent,
    EditprojectComponent,
    VacancyComponent,
    AddVacancyComponent,
    EditVacancyComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    PanelModule,
    CardModule,

    InputTextModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyB11JH7ygSssGu8n_WVduvW0fe3-TJXP2M",
        authDomain: "hrportal-project.firebaseapp.com",
        databaseURL: "https://hrportal-project.firebaseio.com",
        projectId: "hrportal-project",
        storageBucket: "hrportal-project.appspot.com",
        messagingSenderId: "901363151060",
        appId: "1:901363151060:web:338ea6e3fa16e31f4ccb41",
        measurementId: "G-X0VXJ80B8Z"
      }

    ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})
  ],
  providers: [ ProjectService,VacancyService],

  bootstrap: [AppComponent]
})
export class AppModule { }
