import { Component, VERSION } from "@angular/core";
//import { employeesdata } from "../../employees.json";
import employeesdata from "./employees.json";

interface Employee {
  Name: String;
  Expertisefield: String;
  CountryofBirth: String;
  DOJ: String;
  id: Number;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  employees: Employee[] = employeesdata;
}

/*import { Component } from "@angular/core";
import studentsData from "./students.json";

interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  students: Student[] = studentsData;
  
}*/
