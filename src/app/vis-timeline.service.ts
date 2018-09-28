import { Timeline } from "vis";

export class VisTimelineService {
    private timelinesContainer: {name: string, timeline: Timeline}[] = [];

    addTimeline(name: string, timeline: Timeline) {
        console.log(name);
        console.log(timeline);
        this.timelinesContainer.push({name, timeline});
        console.log('Timeline added to service');
    }

    getTimeline(name: string): Timeline {
        let timelineObj = this.timelinesContainer.find((element) => element.name === name);
        if(timelineObj) {
            return timelineObj.timeline;
        }

        return null;
    }

    removeTimeline(name: string) {
        let timelineObjIndex = this.timelinesContainer.map((e) => e.name).indexOf(name);
        console.log(timelineObjIndex);
        if(timelineObjIndex > -1) {
            this.timelinesContainer.splice(timelineObjIndex, 1);
        }
    }
}