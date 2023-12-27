import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  [x: string]: any;
  
  

  //logic

  constructor() { }

  //get All Users

  getAllUsers(): Employee[] {

    return this.employees;
  }



  //get specific user by id

  getUserById(id: number): Employee | undefined {

    return this.employees.find(employee => employee.id === id);
  }


  //DELETE
  deleteUser(id: number) {
    const index = this.employees.findIndex((employee => employee.id === id));
    this.employees.splice(index, 1);
  }

  //address length
  usercount(): number {

    return this.employees.length;
  }

  nextid = 5;

  createUser(employee: Employee) {
    employee.id = this.nextid++;
    this.employees.push(employee);
  }

  // upDateUser //

  upDateUser(employeeid: number, updateduser: Employee) {

    const index = this.employees.findIndex(employee => employee.id === employeeid);

    this.employees[index] = { ...updateduser, id: employeeid }


  }



  //data //
  private employees: Employee[] = [

    {
      id: 1,
      name: "Rasha",
      age: "22",
      email: "Rasha@gmail.com",
      address: "Q R",
      password: "1234"

    },
    {
      id: 2,
      name: "Maryam",
      age: "22",
      email: "Maryam@gmail.com",
      address: "Q R",
      password: "4321"

    },
    {
      id: 3,
      name: "Fatma",
      age: "22",
      email: "Fatma@gmail.com",
      address: "Q R",
      password: "2541"

    },
    {
      id: 4,
      name: "Shorouq",
      age: "22",
      email: "Shorouq@gmail.com",
      address: "Q R",
      password: "1452"

    },
  ]

}
