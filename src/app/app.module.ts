import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app.routes";
import { ImageService } from './image.service';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
    ,ImageListComponent
    ,ImageUploadComponent
  ],
  imports: [
    BrowserModule
    ,BrowserAnimationsModule
    , FormsModule
    , ReactiveFormsModule
    , HttpClientModule
    , AppRoutingModule
    , MatToolbarModule
    , MatButtonModule
    , MatInputModule
    , MatCardModule
    , MatListModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  , providers: [ImageService]
  , bootstrap: [AppComponent]
})
export class AppModule { }