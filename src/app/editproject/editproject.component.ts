import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectInterface } from '../ProjectInterface';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router/';

@Component({
  templateUrl: './editproject.component.html'
})
export class EditprojectComponent implements OnInit {

  project: ProjectInterface;

  // Services injected in constructor
  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) { }

  // Initializes variables
  ngOnInit() {
    var id = this.route.snapshot.params["id"];
    this.project = this.projectService.getProject(id);
    
  }

  // Method to update and employee
  updateProject(){
    this.projectService.updateproject(this.project);
    this.router.navigate(["project"]);
  }

  // Method to cancel update employee operation
  cancelProject(){
    this.router.navigate(["project"]);
  }
}