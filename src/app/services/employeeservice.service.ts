import { Injectable } from '@angular/core';
import { Employee } from '../entity/Employee';

@Injectable({
  providedIn:'root'
})
export class EmployeeService {

  // In-memory list of employees
  allEmployees:Employee[] = [
    {
      "id": "1",
      "firstname": "Lalit",
      "lastname": "Aggarwal",
      "age": 26,
      "designation": "Associate Lead, Technology",
      "projectAssigned":"zonaldesk engineering workforce"
    }, {
      "id": "2",
      "firstname": "Abhishek",
      "lastname": "J",
      "age": 20,
      "designation": "software Lead, Technology",
      "projectAssigned":"zonaldesk engineering workforce"
    }, {
      "id": "3",
      "firstname": "Sneh",
      "lastname": "Aggarwal",
      "age": 20,
      "designation": "Software analyst, Technology",
      "projectAssigned":"zonaldesk engineering workforce"
    }, {
      "id": "4",
      "firstname": "Mahesh",
      "lastname": "Gowda",
      "age": 23,
      "designation": "Business analyst, Technology",
      "projectAssigned":"zonaldesk engineering workforce"
    }, {
      "id": "5",
      "firstname": "Bidushi",
      "lastname": "Gupta",
      "age": 19,
      "designation": "Software analyst, Technology",
      "projectAssigned":"zonaldesk engineering workforce"
    }, {
      "id": "6",
      "firstname": "Aradhana",
      "lastname": "sharma",
      "age": 22,
      "designation": "UI designer, Technology",
      "projectAssigned":"zonaldesk engineering workforce"
    }

  ];

  // Returns all the employees
  getAllEmployees():Employee[]{
    return this.allEmployees;
  }

  // Adds an employee to employee list
  addEmployee(employee:Employee){
    this.allEmployees.push(employee);
  }

  // Update employee details
  updateEmployee(employee:Employee){
    var updateEmployee = this.allEmployees.find(emp => emp.id == employee.id);
    updateEmployee.firstname = employee.firstname;
    updateEmployee.lastname = employee.lastname;
    updateEmployee.age = employee.age;
    updateEmployee.designation = employee.designation;
    updateEmployee.projectAssigned=employee.projectAssigned;
  }

  // Deletes an employee from employee list
  deleteEmployee(id:string){
    this.allEmployees = this.allEmployees.filter(employee => employee.id != id);
  }

  // Returns an employee with passed employee id from employee list
  getEmployee(id:string):Employee{
    return this.allEmployees.find(emp => emp.id == id);
  }
}
