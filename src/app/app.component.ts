import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet
  //   , RouterLink
  //   , RouterLinkActive
  //   ,ImageListComponent
  //   ,ImageUploadComponent
  //   ,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'picture-app';
}
