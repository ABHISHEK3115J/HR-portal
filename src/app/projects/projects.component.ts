import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../project.service';
import { Router } from '@angular/router';
import { ProjectInterface } from '../ProjectInterface';
import { UserService } from '../user.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
   id:string;
  _listFilterBy: string;
  allProjects: ProjectInterface[];
  filteredList: ProjectInterface[];

  // Service injected in constructor
  constructor(private projectService:ProjectService, private router: Router,public user:UserService) { }



  // Gets filter by value from the search box
  get listFilterBy(): string {
    return this._listFilterBy;
  }

  // Sets filter by value from the search box
  set listFilterBy(value: string) {
    this._listFilterBy = value;
    this.filteredList = this._listFilterBy ? this.performFilter(this._listFilterBy) : this.allProjects;
  }

  // Method to filter the employees on basis of filter by value
  performFilter(filterBy: string): ProjectInterface[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.allProjects.filter((project: ProjectInterface) => project.Projectname.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
     project.id.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  // Initializes all employees list from employee service
  ngOnInit() {
    this.allProjects = this.projectService.getAllProjects();
    this.filteredList = this.allProjects;
    this._listFilterBy = "";
  }

  // Method to add an employee to the list
  addProject(){
    this.router.navigate(["addproject"]);
  }
  editProject(proj){
   
this.router.navigate(["editproject/"+proj.id])
console.log(proj.id);
  }
  deleteProject(proj){
    
    var result = confirm("Are you sure, you want to delete this Employee?");
    if (result) {
      this.projectService.deleteproject(proj.id);
      this.refreshList()
      this.router.navigate(["project"]);

  }
}

  // Method to refresh the employee list after successful delete
  refreshList(){
    this.allProjects = this.projectService.getAllProjects();
    this.filteredList = this.allProjects;
  }

}