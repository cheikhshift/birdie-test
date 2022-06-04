import React from 'react';
import TimelineItem from './TimelineItem'
import { Event } from '../../../backend/src/db/types'

class TimelineList extends React.Component<{
	events : Event[] // referring to this as any to avoid importing interface decl from backend code.
},{}> {
  

  render(){

  	//format date data
    return (
	    <div className="timeline">
		    {this.props.events.map(e => (
		    	<TimelineItem key={e.id} {...e}/>
		    ))}
	    </div>
     )
  }
}

export default TimelineList;
