export class ProjectInterface {
    id: string ;
    Projectname:string ;
    EmployeesAssigned:Number;
    EmployeesRequired:Number ;
    TotalEmployees: Number;
    constructor(id: string ,
        Projectname:string ,
        EmployeesAssigned:Number,
        EmployeesRequired:Number ,
        TotalEmployees: Number,){
            this.id = id;
            this.Projectname = Projectname;
            this.EmployeesAssigned = EmployeesAssigned;
            this.EmployeesRequired = EmployeesRequired;
            this.TotalEmployees = TotalEmployees;
        }
}