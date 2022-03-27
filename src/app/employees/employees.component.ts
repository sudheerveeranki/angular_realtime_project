import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
        employees:any;
  constructor(private empSevice:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee();
  }
      getEmployee(){
        this.empSevice.getEmployee().subscribe((data: {}) =>
        {
          this.employees= data;
        });
      }
}
