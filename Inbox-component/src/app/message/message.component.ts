import { Component, OnInit } from '@angular/core';
import { messages } from '../data';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  public gridData = messages;
  constructor() { }

  ngOnInit() {
  }
  messages = messages;

}
