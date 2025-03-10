import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskcomponentComponent } from './Components/taskcomponent/taskcomponent.component';
import { UsercomponentComponent } from './Components/usercomponent/usercomponent.component';
import { HeaderComponent } from './Components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TaskcomponentComponent,UsercomponentComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task Management';
}
