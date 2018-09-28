import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Input, EventEmitter, Output, OnChanges, SimpleChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { DataSet, Timeline } from 'vis';
import { VisTimelineService } from '../vis-timeline.service';

@Component({
  selector: 'vis-timeline',
  templateUrl: './vis-timeline.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./vis-timeline.component.css', '../../../node_modules/vis/dist/vis.min.css']
})
export class VisTimelineComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('timelineContainer') timelineContainer: ElementRef;
  timeline: Timeline;
  destroyed: boolean;

  //Bindable Fields
  @Input() name: string;
  @Input() items: DataSet<{}>;
  @Input() groups: DataSet<{}>;
  @Input() options: {};

  //Events
  @Output() click = new EventEmitter<{}>();
  @Output() contextMenu = new EventEmitter<{}>();
  @Output() doubleClick = new EventEmitter<{}>();
  @Output() itemOver = new EventEmitter<{item: any, event: MouseEvent}>();
  @Output() itemOut = new EventEmitter<{item: any, event: MouseEvent}>();
  @Output() timelineDestroyed = new EventEmitter<any>();
  


  constructor(private visTimelineService: VisTimelineService) { 
  }

  
  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.destroyed = true;
    this.visTimelineService.removeTimeline(this.name);
  }

  ngAfterViewInit() {
    this.destroyed = false;
    this.timeline = new Timeline(this.timelineContainer.nativeElement, this.items, this.options);
    this.visTimelineService.addTimeline(this.name, this.timeline);
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
