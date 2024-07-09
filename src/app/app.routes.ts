import { RouterModule, Routes } from '@angular/router';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'app-image-list', component: ImageListComponent },
    { path: 'app-image-upload', component: ImageUploadComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { 
    
}
