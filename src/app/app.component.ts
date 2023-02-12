import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumber:number[] = [];
  evenNumber:number[] = [];
  storeddata:any;
  constructor(private dataservice:DataserviceService){}
  // ngOnInit(){
  //   this.dataservice.data.subscribe(data =>{
  //     this.storeddata = data;
  //     console.log("jkkjkjkjjjkj",this.storeddata);
  //   })
  // }
  serverElements = [{type:'server',name:'grhherer',content:'efewgew'}];

  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{blueprintName:string,blueprintcontent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintcontent
    });
  }
  
  onChangeFirst(){
    this.serverElements[0].name = 'Change';
  }

  OnStartbuttonclick(event){
    console.log("lllll",event);
    this.dataservice.updateData(event);
    console.log("hhhhhhhh",this.dataservice.updateData(event));
    if(event % 2 == 0){
      this.evenNumber.push(event);
    }
    else{
      this.oddNumber.push(event)
    }
    
  }
}
