import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  usernameOne: string = "";
  usernameTwo: string = "";
  duelUsers: any;
  error: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  async onSubmit() {
    this.error = null;
    this.duelUsers = null;

    try {
      this.duelUsers = await this.userService.duelUsers(this.usernameOne, this.usernameTwo);
    } catch (error) {
      this.error;
      throw error;
    }
  }
}
