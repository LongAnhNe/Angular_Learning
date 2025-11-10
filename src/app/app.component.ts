import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderLayoutComponent } from './share/header-layout/header-layout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [HeaderLayoutComponent, UserListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_learning';
}
