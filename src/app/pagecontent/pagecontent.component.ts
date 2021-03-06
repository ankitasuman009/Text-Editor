import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Router } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-pagecontent',
  templateUrl: './pagecontent.component.html',
  styleUrls: ['./pagecontent.component.css']
})
export class PagecontentComponent implements OnInit {
  res: any;
  terms: any;
  cont: any;
  constructor(private contentservice:ContentService, private router:Router) { }

  ngOnInit(){
    this.Getcontent()
  }
  Getcontent(){
    this.contentservice.Getcontent().subscribe((data:any)=>{
      this.res = data;
      this.terms = this.res[1].pageContentTitle;
      this.cont = this.res[1].Content;
      console.log(this.res);
    })
  }
  GetcontentById(id:number){
    this.router.navigate(['/Details'], { queryParams: {Id: id}});
  }
}
