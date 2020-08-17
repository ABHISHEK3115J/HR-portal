import { Component, OnInit } from '@angular/core';
import { VacancyInterface} from '../VacancyInterface';
import { VacancyService} from '../vacancy.service';
import { Router} from '@angular/router'
@Component({
  selector: 'app-addvacancy',
  templateUrl: './addvacancy.component.html',
  styleUrls: ['./addvacancy.component.css']
})
export class AddVacancyComponent implements OnInit {
  JobTitle:string;
  JobRole:string;
  District:string;
  Vacancy:number;
  vacancy: VacancyInterface;
 ngOnInit(){}
  // Services injected in constructor
  constructor(private vacancyService: VacancyService, private router: Router) { 
  }
  

  // Method to save an employee
  saveVacancy(){
    this.vacancy = new VacancyInterface(this.makeRandomID(), this.JobTitle, this.JobRole, this.District, this.Vacancy);
    this.vacancyService.addproject(this.vacancy);
    this.router.navigate(["vacancy"]);
  }

  // Method to cancel the add operation
  cancelVacancy(){
    this.router.navigate(["vacancy"]);
  }

  // Creates random id for employee
  makeRandomID(): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

}
