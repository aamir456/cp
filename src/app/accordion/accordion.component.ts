import { Component, OnInit, Input, ViewChild  } from '@angular/core';
import { SharedService } from '../shared.service';
import { MatAccordion } from '@angular/material/expansion';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @Input() record:any;
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.GetList();
  }
  GetList(){
    this.service.getlist().subscribe(data=>{
      this.record = data;
      return data;
    });
  }
}
