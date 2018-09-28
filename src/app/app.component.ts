import { Component } from '@angular/core';
import { DataSet } from 'vis';
import { VisTimelineService } from './vis-timeline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vis-timeline-angular';

  items = new DataSet([
    {id: 1, content: 'item 1', start: '2013-04-20'},
    {id: 2, content: 'item 2', start: '2013-04-14'},
    {id: 3, content: 'item 3', start: '2013-04-18'},
    {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
    {id: 5, content: 'item 5', start: '2013-04-25'},
    {id: 6, content: 'item 6', start: '2013-04-27'}
  ]);

  options = {
    editable: true,
    onAdd: function (item, callback) {
     item.content = 'New item';
     if (item.content != null) {
       callback(item); // send back adjusted item
     }
     else {
       callback(null); // cancel updating the item
     }
   }
   };

  constructor(private timelineService: VisTimelineService) {}

  onBtn1Click() {
    let timeline = this.timelineService.getTimeline('timelineTest1');
    if(timeline) {
      timeline.destroy();
    }
    
  }

  onBtn2Click() {
    console.log("clicked 2");
    let timeline = this.timelineService.getTimeline('timelineTest2');
    if(timeline) {
      timeline.destroy();
    }  
  }

  onTimelineClicked(event) {
    console.log('Click event');
    console.log(event);
  }

  onContextMenu(event) {
    console.log('Context menu event');
    console.log(event);
  }

  onDoubleClick(event) {
    console.log('Double click event');
    console.log(event);
  }

  onItemOver(event) {
    console.log('Item over event')
    console.log(event);
  }

  onItemOut(event) {
    console.log('Item out event')
    console.log(event);
  }
}
