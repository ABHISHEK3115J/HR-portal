import { Component, OnInit } from '@angular/core';
import { ProjectInterface} from '../ProjectInterface';
import { ProjectService} from '../project.service';
import { Router} from '@angular/router'
@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  Projectname:string;
  EmployeeAssigned:number;
  EmployeeRequired:number;
  TotalEmployees:number;
  project: ProjectInterface;
 ngOnInit(){}
  // Services injected in constructor
  constructor(private projectService: ProjectService, private router: Router) { 
  }
  

  // Method to save an employee
  saveProject(){
    this.project = new ProjectInterface(this.makeRandomID(), this.Projectname, this.EmployeeAssigned, this.EmployeeRequired, this.TotalEmployees);
    this.projectService.addproject(this.project);
    this.router.navigate(["project"]);
  }

  // Method to cancel the add operation
  cancelProject(){
    this.router.navigate(["project"]);
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
