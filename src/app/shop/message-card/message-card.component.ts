import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnInit {

  @Input('message') message: any
  @Output('remove') remove = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

  removeMessage(message: any) {
    this.remove.emit(message)
  }
}
