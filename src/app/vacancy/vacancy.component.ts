import { Component, OnInit } from '@angular/core';
import { VacancyService} from '../vacancy.service';
import { Router } from '@angular/router';
import { VacancyInterface } from '../VacancyInterface';
import { UserService } from '../user.service';
@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
   id:string;
  _listFilterBy: string;
  allVacancies: VacancyInterface[];
  filteredList: VacancyInterface[];

  // Service injected in constructor
  constructor(private projectService:VacancyService, private router: Router,public user:UserService) { }



  // Gets filter by value from the search box
  get listFilterBy(): string {
    return this._listFilterBy;
  }

  // Sets filter by value from the search box
  set listFilterBy(value: string) {
    this._listFilterBy = value;
    this.filteredList = this._listFilterBy ? this.performFilter(this._listFilterBy) : this.allVacancies;
  }

  // Method to filter the employees on basis of filter by value
  performFilter(filterBy: string): VacancyInterface[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.allVacancies.filter((project: VacancyInterface) => project.District.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
     project.JobTitle.toLocaleLowerCase().indexOf(filterBy) !== -1||
     project.JobRole.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  // Initializes all employees list from employee service
  ngOnInit() {
    this.allVacancies = this.projectService.getAllVacancies();
    this.filteredList = this.allVacancies;
    this._listFilterBy = "";
  }

  // Method to add an employee to the list
  addVacancy(){
    this.router.navigate(["addvacancy"]);
  }
  editVacancy(vac){
   
this.router.navigate(["editvacancy/"+vac.id])
console.log(vac.id);
  }
  deleteVacancy(vac){
    
    var result = confirm("Are you sure, you want to delete this VacancyList?");
    if (result) {
      this.projectService.deletevacancy(vac.id);
      this.refreshList()
      this.router.navigate(["vacancy"]);

  }
}

  // Method to refresh the employee list after successful delete
  refreshList(){
    this.allVacancies = this.projectService.getAllVacancies();
    this.filteredList = this.allVacancies;
  }

}