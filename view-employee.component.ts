import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

  //for data fromurl

  route: ActivatedRoute = inject(ActivatedRoute);

  // for getting data from service
  employeeserve = inject(EmployeeService)

  
  employee:Employee|undefined;



  constructor() {
    const employeeid = Number(this.route.snapshot.params['id']);
    this.employee = this.employeeserve.getUserById(employeeid);
  }


}
