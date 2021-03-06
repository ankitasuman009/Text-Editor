import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { CKEditorModule } from 'ng2-ckeditor';    
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TexteditorComponent } from './texteditor/texteditor.component';
import { PagecontentComponent } from './pagecontent/pagecontent.component';
import { DetailspostComponent } from './detailspost/detailspost.component';  


@NgModule({  
  declarations: [  
    AppComponent, TexteditorComponent, PagecontentComponent, DetailspostComponent,  
    TexteditorComponent,  
    PagecontentComponent  
  ],  

  imports: [  
    BrowserModule,  
    AppRoutingModule,  
    CKEditorModule,  
    HttpClientModule,  
    FormsModule,  
    ReactiveFormsModule  
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})
export class AppModule { } 