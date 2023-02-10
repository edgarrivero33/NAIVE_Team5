import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  files: File[] = [];

  constructor() { }

  displayData:boolean = false;
  
  displayButton:boolean = false;

  file: File;

  ngOnInit() {
  }

  onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
    this.displayButton = true;
	}

  onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

  onSubmit(){
    this.file = this.files[0];
    this.files = [];
    setTimeout(
      () => {
          // the code to execute after the timeout
          this.displayData = true;
      },
      1000 // the time to sleep to delay for
  );
    
    this.displayButton = false;
  }

}