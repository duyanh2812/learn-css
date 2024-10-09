import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyFirstService } from './services/my-first.service';
import { MenuComponent } from './menu/menu.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    MenuComponent,
    AddUserComponent,
    AboutComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MyFirstService],
})
export class AppComponent {
  users: any = [];
  user: any = {};
  show: boolean = true;
  title = 'learn-angular';
  // private service: MyFirstService = inject(MyFirstService);

  changeTitle() {
    this.show = !this.show;
    console.log('changeTitle');
  }
}
