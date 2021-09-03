import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock_tasks';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : Task[] = TASKS;
  constructor() { }

  ngOnInit(): void {
  }

}
