import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css'],
})
export class InspectComponent implements OnInit {
  username: string = '';
  user: any;
  error: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  async onSubmit() {
    this.error = null;
    this.user = null;

    try {
      this.user = await this.userService.inspectUser(this.username);
    } catch (error) {
      this.error = error;
      throw error;
    }
  }
}
