import React from 'react';
import { Event } from '../../../backend/src/db/types'

class TimelineItem extends React.Component<Event, {}> {
  
   mood_map : any = {
  	"okay" : "green",
  	"bad" : "red",
  	"happy" : "yellow"
  }

  getCaregiver(id : string) : string{
  	return "Placeholder Caregiver name"
  }
  

  render(){
  	const mood_color = this.props.mood ? this.mood_map[this.props.mood as string] : "tan"

    return (
	    <div className="timeline-item">
	    	<div style={{background : mood_color}} className="timeline-bubble"> </div>
	    	<p><span>{this.props.event_type } {this.props.mood}</span> - <span>{new Date(this.props.timestamp).toLocaleString() }</span>  <br/>
	    	Caregiver : { this.getCaregiver(this.props.caregiver_id)}</p>
	    	<p>{this.props.payload.note}</p>
	    </div>
     )
  }
}

export default TimelineItem;
