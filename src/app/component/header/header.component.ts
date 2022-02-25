import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 title: string = "Task Tracker";
showAddTask!:boolean;
Subscription!:Subscription;

  constructor(private uiService:UiService) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }
  toggleAddTask(){
    this.uiService.toggleAddTask();

  }
  

}
