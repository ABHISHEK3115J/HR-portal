export class VacancyInterface {
    id: string ;
    JobTitle:string ;
    JobRole:string;
    District:string ;
    Vacancy: Number;
    constructor( id: string ,
        JobTitle:string ,
        JobRole:string,
        District:string ,
        Vacancy: Number){
            this.id = id;
            this.JobTitle = JobTitle;
            this.JobRole = JobRole;
            this.District = District;
            this.Vacancy = Vacancy;
        }
}