import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-notification-complete',
  templateUrl: './notification-complete.component.html',
  styleUrls: ['./notification-complete.component.css']
})
export class NotificationCompleteComponent implements OnInit {

  @Input('selected_notification') selected_notification;

  constructor() { }

  ngOnInit(): void {
  }

}
