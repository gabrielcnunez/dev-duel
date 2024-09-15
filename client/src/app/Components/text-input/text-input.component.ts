import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  username: string = '';

  @Output() usernameChange: EventEmitter<string> = new EventEmitter<string>();

  setUsername(event: any) {
    this.username = event.target.value;
    this.usernameChange.emit(this.username);
  }
}
