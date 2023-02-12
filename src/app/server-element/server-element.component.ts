import { AfterContentInit, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation ,AfterViewInit,ContentChild} from '@angular/core';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterViewInit,AfterContentInit{
  clickdata:any;
@ViewChild('heading',{static: true}) header:ElementRef;
@ContentChild('contentPara',{static: true}) paragraph:ElementRef;
@Input('srvElement') element:{type:string,name:string,content:string}
@Input() name:string;
  constructor(private dataservice:DataserviceService) { 
    console.log("constructor called");
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("onchanges called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngoninit called")
    console.log("Text Content",this.header.nativeElement.textContent);
    console.log("Text content of paragraph",this.paragraph.nativeElement.textContent);

    this.dataservice.data?.subscribe(somedata => {
      this.clickdata = somedata
      console.log("sdfwqfe",this.clickdata);
    })
  }

  ngDoCheck(): void {
      console.log("ngdocheck called")
  }

  ngAfterContentInit(): void {
      console.log("agaftercontent init called");
      console.log("Text content of paragraph",this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit(){
    console.log("after view init")
    console.log("Text Content",this.header.nativeElement.textContent);
  }

  

}
