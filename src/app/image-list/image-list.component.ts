import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-image-list',
  standalone: true,
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'] ,
  imports: [ MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    HttpClientModule ]
})
export class ImageListComponent{

  images: any[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getImages().subscribe(data => {
      this.images = data;
    });
  }
}
