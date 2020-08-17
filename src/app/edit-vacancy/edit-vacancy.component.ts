import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VacancyInterface } from '../VacancyInterface';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from '../vacancy.service';
import { Router } from '@angular/router/';

@Component({
  templateUrl: './edit-vacancy.component.html'
})
export class EditVacancyComponent implements OnInit {

  vacancy: VacancyInterface;

  // Services injected in constructor
  constructor(private vacancyService: VacancyService, private route: ActivatedRoute, private router: Router) { }

  // Initializes variables
  ngOnInit() {
    var id = this.route.snapshot.params["id"];
    this.vacancy = this.vacancyService.getvacancy(id);
    
  }

  // Method to update and employee
  updateVacancy(){
    this.vacancyService.updatevacancy(this.vacancy);
    this.router.navigate(["vacancy"]);
  }

  // Method to cancel update employee operation
  cancelVacancy(){
    this.router.navigate(["vacancy"]);
  }
}