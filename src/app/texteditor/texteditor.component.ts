import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContentService, Content } from '../content.service';
// import { Content }
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-texteditor',
  templateUrl: './texteditor.component.html',
  styleUrls: ['./texteditor.component.css']
})
export class TexteditorComponent implements OnInit {
  name = 'ng2-ckeditor'; 
  ckeConfig: any; 
  mycontent: any; 
  log: any;
  show_preview_only: Boolean = false;
  @ViewChild('PageContent') PageContent: any;    
  res: any;
  constructor(private contentservice:ContentService,private router: Router) { } 
  contentdata=new Content();

   ngOnInit() {
    this.Getcontent()   
    this.ckeConfig = { 
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true  
    };
   }
   onSubmit() 
   { 
    console.log(this.contentdata);
    //  debugger; 
    //  debugger; 
    //  this.contentservice.AddUpdateContent(this.contentdata).subscribe((data : any) => {    
    //    debugger; 
    //    alert("Data saved Successfully"); 
    //    this.router.navigate(['/Post']);  
    //   })
    }    

  Getcontent() {
    this.contentservice.Getcontent().subscribe((data:any)=>{   
      this.res=data;
      console.log(this.res);
    }) 
  } 
  toggle_full_preview_mode() { this.show_preview_only = !this.show_preview_only; }
}
