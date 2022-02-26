import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() SortedArray:any;
  Data:any;
  breakpoint: number;
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 768 ? 1 : 6;
    this.GetList();

  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 768 ? 1 : 6;
  }
  
  GetList(){
    this.service.getlist().subscribe(data=>{
      this.Data = data;
      this.SortedArray = this.Data.sort((n1,n2) => {
        if (n1.abv > n2.abv) {
          return 1;
        }
    
        if (n1.abv < n2.abv) {
          return -1;
        }
    
        return 0;
      });
      return data;
      
    });
  
  }

}
