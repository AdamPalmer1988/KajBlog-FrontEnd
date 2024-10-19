import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
@Output() navChange = new EventEmitter<string>();

showAllBlogs() {
  this.navChange.emit('all');
}

}
