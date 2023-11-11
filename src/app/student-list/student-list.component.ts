import { Component } from '@angular/core';
import { Students } from './students';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  selectedStudent: Students | undefined;

  students: Students[] = [
    { id: 1, name: "anees", marks: 400 },
    { id: 2, name: "uman", marks: 405 },
    { id: 3, name: "sajid", marks: 410 },
  ]

}
