import { Routes } from '@angular/router';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

export const routes: Routes = [
    { path: 'app-image-list', component: ImageListComponent },
    { path: 'app-image-upload', component: ImageUploadComponent}
];
