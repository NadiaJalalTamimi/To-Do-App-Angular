import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service'
import {Task} from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : Task[] = [];

  constructor(private taskService: ServicesService) { }

  ngOnInit(): void {
  this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks );
  }
  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter((t) => t.id !== task.id))

  }
  toggleReminder(task:Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }
  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push())
  }

}
