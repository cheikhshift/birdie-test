import React from 'react';
import TimelineItem from './TimelineItem'

class TimelineList extends React.Component<{
	events : any[] // referring to this as any to avoid importing interface decl from backend code.
},{}> {
  

  render(){

  	//format date data
  	this.props.events.map(ev => ev.timestamp = new Date(ev.timestamp).toLocaleString())

    return (
	    <div className="timeline">
		    {this.props.events.map(e => (
		    	<TimelineItem {...e}/>
		    ))}
	    </div>
     )
  }
}

export default TimelineList;
