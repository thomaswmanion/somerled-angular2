import { Component, OnInit, Input } from '@angular/core';
import { MasonryOptions } from 'angular2-masonry';

import { Dog } from './dog-model';
import { dogs } from './dog-list';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  @Input() gender: string;
  dogs: Dog[] = dogs;
  masonryOptions: MasonryOptions = {
    transitionDuration: '0s',
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item'
  }
  constructor() { }

  ngOnInit() {
  }

}
