import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//imports for components to be readible in file
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {HttpClientModule} from '@angular/common/http';
import { OutputComponent } from './output/output.component';

// Must put components into the declarations list for app to read
@NgModule({
  imports: [BrowserModule, FormsModule, NgxDropzoneModule,HttpClientModule],
  declarations: [AppComponent, TodoComponent, HeaderComponent, FileUploadComponent, OutputComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
