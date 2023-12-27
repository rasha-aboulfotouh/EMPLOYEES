import { Component, inject } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {


  employees: Employee [] = [];
  userservce :EmployeeService= inject(EmployeeService);
 


  constructor() {
    this.employees = this.userservce.getAllUsers() ;

  }

  
  //Delete
  deleteuser(id:number){
    this.userservce.deleteUser(id);
  }

}
