import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('para') para: ElementRef;

  constructor() { 
    console.log('constructor called')
   }
   
   ngOnChanges(changes: SimpleChanges){
     console.log('ngOnChanges called')
     console.log(changes)
   }

  ngOnInit() {
    console.log('ngOnInIt called')
    // console.log('yoyo',this.header.nativeElement.textContent)
  }

  ngDoCheck(){
    console.log('ngDoCheck Called')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called')
    // console.log('yoyo',this.para.nativeElement.textContent)
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
    // console.log('yoyo',this.para.nativeElement.textContent)
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(){
    console.log('onDestroy called')
  }

}
