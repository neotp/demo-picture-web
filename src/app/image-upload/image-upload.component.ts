import { Component } from '@angular/core';
import { ImageService } from '../image.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-image-upload',
  // standalone: true,
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'] ,
})
export class ImageUploadComponent {

  
  selectedFile: File | null = null;
  constructor(private imageService: ImageService) { }
  
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.imageService.uploadImage(this.selectedFile).subscribe(response => {
        console.log(response);
      });
    }
  }
}
