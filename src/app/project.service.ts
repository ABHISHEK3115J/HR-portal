import { Injectable } from '@angular/core';
import {ProjectInterface} from './ProjectInterface'
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  allProjects:ProjectInterface[] = [
    {
      "id": "1",
      "Projectname": "zonalwork",
      "EmployeesAssigned": 10,
      "EmployeesRequired": 20,
      "TotalEmployees": 30
    }, {
      "id": "2",
      "Projectname": "zonalwork",
      "EmployeesAssigned": 10,
      "EmployeesRequired": 20,
      "TotalEmployees": 30
    }, {
      "id": "3",
      "Projectname": "zonalwork",
      "EmployeesAssigned": 10,
      "EmployeesRequired": 20,
      "TotalEmployees": 30
    }, {
      "id": "4",
      "Projectname": "zonalwork",
      "EmployeesAssigned": 10,
      "EmployeesRequired": 20,
      "TotalEmployees": 30
    }, {
      "id": "5",
      "Projectname": "zonalwork",
      "EmployeesAssigned": 10,
      "EmployeesRequired": 20,
      "TotalEmployees": 30
    }
  ];

  // Returns all the employees
  getAllProjects():ProjectInterface[]{
    return this.allProjects;
  }

  // Adds an employee to employee list
  addproject(project:ProjectInterface){
    this.allProjects.push(project);
  }

  // Update employee details
  updateproject(project:ProjectInterface){
    var updateProject = this.allProjects.find(emp => emp.id == project.id);
    updateProject.Projectname = project.Projectname;
    updateProject.EmployeesAssigned = project.EmployeesAssigned;
    updateProject.EmployeesRequired = project.EmployeesRequired;
    updateProject.TotalEmployees = project.TotalEmployees;
  }

  // Deletes an employee from employee list
  deleteproject(id:string){
    this.allProjects = this.allProjects.filter(proj => proj.id != id);
  }

  // Returns an employee with passed employee id from employee list
  getProject(id:string):ProjectInterface{
    return this.allProjects.find(emp => emp.id == id);
  }
}
