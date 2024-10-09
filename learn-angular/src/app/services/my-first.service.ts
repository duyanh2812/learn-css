import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {
  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'ndanh',
      email: 'ndanh@gmail',
      address: 'Hai Hau, Nam Dinh',
    });
  }

  users: Array<any> = [];

  insert(user: { name: string; email: string; address: string }): void {
    this.users.push(user);
  }

  getAllMessages(): any[] {
    return this.users;
  }

  deleteMessage(messageId: number): void {
    this.users.splice(messageId, 1);
  }
}
