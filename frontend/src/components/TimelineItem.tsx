import React from 'react';


class TimelineItem extends React.Component<{
	id : string
	event_type : string
	visit_id : string
	timestamp : string
	caregiver_id : string
	care_recipient_id : string
	mood? : string,
	payload : any
}, {}> {
  
   mood_map : any = {
  	"okay" : "green",
  	"bad" : "red"
  }

  getCaregiver(id : string) : string{
  	return "Placeholder Caregiver name"
  }
  

  render(){
  	const mood_color = this.props.mood ? this.mood_map[this.props.mood as string] : "tan"

    return (
	    <div className="timeline-item">
	    	<div style={{background : mood_color}} className="timeline-bubble"> </div>
	    	<p><span>Mood {this.props.mood}</span> - <span>{new Date(this.props.timestamp).toLocaleString() }</span>  <br/>
	    	Caregiver { this.getCaregiver(this.props.caregiver_id)}</p>
	    </div>
     )
  }
}

export default TimelineItem;
