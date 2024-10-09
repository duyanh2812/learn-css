import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  @Input()
  user: any = {};
  name: string = '';
  @Input()
  index: number = -1;

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  deleteMessage() {
    this.delete.emit(this.index);
  }
}
