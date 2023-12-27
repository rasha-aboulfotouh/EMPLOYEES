import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  ////****/////

  employee!: Employee[];

  employeeservce: EmployeeService = inject(EmployeeService);

  //***/// *//
  employeeform!: FormGroup;


  constructor(private formBuilder: FormBuilder) {

    this.employeeform = this.formBuilder.group({
      name: [''],
      age: [''],
      email: [''],
      address: [''],
      password: [''],

    })

    this.employee = this.employeeservce.getAllUsers();

  }


  ///      *******     ///
  adduser() {

    const employee: Employee = this.employeeform.value;
    this.employeeservce.createUser(employee);
    console.log(employee);
  }


}
