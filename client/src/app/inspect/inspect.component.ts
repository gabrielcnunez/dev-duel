import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css'],
})
export class InspectComponent implements OnInit {
  username: string = '';
  user: any = null;
  error: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  onSubmit() {
    this.error = null; 
    this.user = null;

    this.userService.inspectUser(this.username).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        this.error = 'User not found. Please try again.';
      }
    );
  }
}
