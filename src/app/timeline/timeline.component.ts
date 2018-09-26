import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { DataSet, Timeline } from 'vis';

@Component({
  selector: 'vis-timeline',
  templateUrl: './timeline.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./timeline.component.css', '../../../node_modules/vis/dist/vis.min.css']
})
export class TimelineComponent implements OnInit {
  @ViewChild('timelineContainer') timelineContainer: ElementRef;
  timeline: Timeline;

  //Bindable Fields
  @Input() items: DataSet<{}>;
  @Input() groups: DataSet<{}>;
  @Input() options: {};

  //Events
  @Output() click = new EventEmitter<{}>();
  @Output() contextMenu = new EventEmitter<{}>();
  @Output() doubleClick = new EventEmitter<{}>();
  @Output() itemOver = new EventEmitter<{item: any, event: MouseEvent}>();
  @Output() itemOut = new EventEmitter<{item: any, event: MouseEvent}>();
  


  constructor() { 
  }

  
  ngOnInit() {
    this.timeline = new Timeline(this.timelineContainer.nativeElement, this.items, this.options);
    this.setUpEvents();
  }

  private setUpEvents(){
    this.timeline.on('click', (properties) => {
      this.click.emit(properties);
      event.stopPropagation();
    });

    this.timeline.on('contextmenu', (properties) => {
      this.contextMenu.emit(properties);
      properties.event.preventDefault();
    });

    this.timeline.on('doubleClick', (properties) => {
      this.doubleClick.emit(properties);
    });

    this.timeline.on('itemover', (properties) => {
      this.itemOver.emit(properties);
    });

    this.timeline.on('itemout', (properties) => {
      this.itemOut.emit(properties);
    });

  }

}
