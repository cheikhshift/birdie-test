import React from 'react';
import TimelineItem from './TimelineItem'
import { Event } from '../../../backend/src/db/types'
import Toolbar  from './Toolbar'


class TimelineList extends React.Component<{
	events : Event[] // referring to this as any to avoid importing interface decl from backend code.
},{}> {
  
  state = {
  	sortColumn : "",
  	sortOrder : -1,

  }



 onQueryChange = (mood: string) : void => {
 	console.log(mood)
 }

 onSortOrderChange = (order: string) : void => {

 }

 onSortByChange = (sortBy: string) : void => {

 }


  render(){

  	//format date data
    return (
	    <div className="timeline">
	    	<Toolbar 
	    	onQueryChange={this.onQueryChange} 
	    	onSortByChange={this.onSortByChange}
	    	onSortOrderChange={this.onSortOrderChange} />
		    {this.props.events.map(e => (
		    	<TimelineItem key={e.id} {...e}/>
		    ))}
	    </div>
     )
  }
}

export default TimelineList;
