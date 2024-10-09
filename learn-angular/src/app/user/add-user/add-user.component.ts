import { Component } from '@angular/core';
import { MyFirstService } from '../../services/my-first.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from '../user-detail/user-detail.component';
@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, UserDetailComponent, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  users: any = [];
  user: any = {};
  show: boolean = true;

  constructor(private service: MyFirstService) {
    // private service: MyFirstService
    this.users = this.service.getAllMessages();
  }

  deleteMessage($event: number) {
    this.service.deleteMessage($event);
  }

  addItem() {
    this.service.insert({
      name: this.user.name,
      email: this.user.email,
      address: this.user.address,
    });
    // this.items = this.service.getAllMessages();
  }
}
