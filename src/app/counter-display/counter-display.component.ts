import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent implements OnInit{

  count: any;

constructor(private store: Store<{counter: {counter: number}}>){
}

ngOnInit(): void {
    this.store.select('counter').subscribe(data =>{
      this.count = data.counter;
    })
}
}
