import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css'],
})
export class DuelComponent implements OnInit {
  usernameOne: string = '';
  usernameTwo: string = '';
  duelUsers: any;
  error: any;
  winnerIndex: number | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  duelWinner() {
    if (this.duelUsers && this.duelUsers.length === 2) {
      const [user1, user2] = this.duelUsers;
      
      const score1 = user1.followers + user1['total-stars'] 
      const score2 = user2.followers + user2['total-stars']
      
      console.log(score1);
      console.log(score2);
      this.winnerIndex = score1 > score2 ? 0 : 1;
    }
  }

  async onSubmit() {
    this.error = null;
    this.duelUsers = null;

    try {
      this.duelUsers = await this.userService.duelUsers(
        this.usernameOne,
        this.usernameTwo
      );
      this.duelWinner();
    } catch (error) {
      this.error;
      throw error;
    }
  }
}
