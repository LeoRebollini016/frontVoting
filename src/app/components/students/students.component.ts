import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { VotingService } from '../../services/voting.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [VotingService]
})
export class StudentsComponent implements OnInit {
  public students!: Student[];
    public url: string;
  constructor(
    private _studentService: VotingService
  ) { 
      this.url = Global.url;
  }

  ngOnInit(): void {
    this.getStudents();
  }
  getStudents(){
    this._studentService.getStudents().subscribe(
        response => {
          if(response){
            this.students = response;
          }
        },
        error => {
          console.log(<any>error);
        }
    );
  }
}
