import { Component } from '@angular/core';
import { messages } from './data';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Inbox-component';
  messages = messages;

}
