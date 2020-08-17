export class Employee {
    id:string;
    firstname:string;
    lastname:string;
    age:number;
    designation:string;
    projectAssigned:string;

    constructor(id:string,
        firstname:string,
        lastname:string,
        age:number,
        designation:string,projectAssigned:string,){
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
            this.designation = designation;
            this.projectAssigned = projectAssigned;
        }
}