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
  	query : ""
  }



 onQueryChange = (mood: string) : void => {
 	this.setState(prevState => {
 		return {
 			...prevState,
 			query : mood
 		}
 	})
 }

 onSortOrderChange = (order: string) : void => {

 }

 onSortByChange = (sortBy: string) : void => {

 }


  render(){

  	const items = this.props.events.filter(ev => {
  		var md = ev.mood as string
  		return md.includes(this.state.query)
  	})


  	const itemView = items.length === 0 && this.props.events.length > 0 ? (<h2>No items found for query</h2>)
  	: items.map(e => (
		 <TimelineItem key={e.id} {...e}/>
	))

  	//format date data
    return (
	    <div className="timeline">
	    	<Toolbar 
	    	onQueryChange={this.onQueryChange} 
	    	onSortByChange={this.onSortByChange}
	    	onSortOrderChange={this.onSortOrderChange} />
		    {itemView}
	    </div>
     )
  }
}

export default TimelineList;
