import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {


  updateEmployeeform!: FormGroup;
  employeeid!: number;


  constructor( private formbuilder:FormBuilder ,private employeeservice :EmployeeService ,private route:ActivatedRoute  ){

    this.updateEmployeeform =  this.formbuilder.group({
      name:['' ],
      age :[''],
      email:[''],
      add:[''],
      password:[''],
  
    })


  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employeeid = +params['id'];
      this.loaduserDetails();
    });
  }


  loaduserDetails() {
    const useeee = this.employeeservice.getUserById(this.employeeid);

    if (useeee) {
      this.updateEmployeeform.patchValue(useeee);
    } else {
      // Redirect to the product list if the product is not found

    }
  }

  upDateUser() {
    if (this.updateEmployeeform.valid) {
      const updateduser: Employee = {
        id: this.employeeid,
        ...this.updateEmployeeform.value
      };

      this.employeeservice.upDateUser(this.employeeid, updateduser);

    }
  }


}
