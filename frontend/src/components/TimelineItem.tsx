import React from 'react';


class TimelineItem extends React.Component<{
	id : string
	event_type : string
	visit_id : string
	timestamp : string
	caregiver_id : string
	care_recipient_id : string
	mood? : string
}, {}> {
  
   mood_map : any = {
  	"okay" : "green",
  	"bad" : "red"
  }

  getCaregiver(id : string) : string{
  	return "Placeholder Caregiver name"
  }
  

  render(){
  	const mood_color = this.mood_map[this.props.mood as string]

    return (
	    <div className="timeline-item">
	    	<div style={{background : mood_color}} className="timeline-bubble"> </div>
	    	<p>Mood {this.props.mood} - {this.props.timestamp}  <br/>
	    	Caregiver { this.getCaregiver(this.props.caregiver_id)}</p>
	    </div>
     )
  }
}

export default TimelineItem;
