import { Injectable } from '@angular/core';
import {VacancyInterface} from './VacancyInterface'
@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor() { }
  allVacancies:VacancyInterface[] = [
    {
      "id": "1",
      "JobTitle": "Software Engineer",
      "JobRole": "UI/UX design",
      "District": "Banglore",
      "Vacancy": 30
    }, {
      "id": "2",
      "JobTitle": "Software Engineer",
      "JobRole": "UI/UX design",
      "District": "Banglore",
      "Vacancy": 30
    },{
      "id": "3",
      "JobTitle": "Software Engineer",
      "JobRole": "UI/UX design",
      "District": "Banglore",
      "Vacancy": 30
    },{
      "id": "4",
      "JobTitle": "Software Engineer",
      "JobRole": "UI/UX design",
      "District": "Banglore",
      "Vacancy": 30
    },{
      "id": "5",
      "JobTitle": "Software Engineer",
      "JobRole": "UI/UX design",
      "District": "Banglore",
      "Vacancy": 30
    }
  ];

  // Returns all the employees
  getAllVacancies():VacancyInterface[]{
    return this.allVacancies;
  }

  // Adds an employee to employee list
  addproject(vacancy:VacancyInterface){
    this.allVacancies.push(vacancy);
  }

  // Update employee details
  updatevacancy(vacancy:VacancyInterface){
    var updateVacancy = this.allVacancies.find(emp => emp.id == vacancy.id);
    updateVacancy.JobTitle = vacancy.JobTitle;
    updateVacancy.JobRole = vacancy.JobRole;
    updateVacancy.District = vacancy.District;
    updateVacancy.Vacancy = vacancy.Vacancy;
  }

  // Deletes an employee from employee list
  deletevacancy(id:string){
    this.allVacancies = this.allVacancies.filter(proj => proj.id != id);
  }

  // Returns an employee with passed employee id from employee list
  getvacancy(id:string):VacancyInterface{
    return this.allVacancies.find(emp => emp.id == id);
  }
}
