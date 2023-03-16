import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username: string = '';

  setUsername(name: string) {
    this.username = name;
    this.usernameChange.emit(this.username);
  }

  @Output() usernameChange: EventEmitter<string> = new EventEmitter<string>();
}
