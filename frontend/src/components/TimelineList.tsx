import React from 'react';
import TimelineItem from './TimelineItem'
import { Event } from '../../../backend/src/db/types'
import Toolbar  from './Toolbar'


class TimelineList extends React.Component<{
	events : Event[] // referring to this as any to avoid importing interface decl from backend code.
},{}> {
  
  state = {
  	sortOrder : -1,
  	query : "",
    currentPage : 1
  }

 public static BatchSize = 40

 onQueryChange = (mood: string) : void => {
 	this.setState(prevState => {
 		return {
 			...prevState,
 			query : mood,
      currentPage : 1
 		}
 	})
 }

 onSortOrderChange = (order : string) : void => {
 	this.setState(prevState => {
 		return {
 			...prevState,
 			sortOrder : parseInt(order),
      currentPage : 1
 		}
 	})	
 }
 
 nextPage = () => {
   this.setState(prevState => {
     return {
      ...prevState,
      currentPage : 1 + this.state.currentPage
     }
   })  
 }


  render(){

  	const items = Toolbar.filterItems(
  		this.props.events,
  		this.state.query,
  		this.state.sortOrder
  	)
    
    const stopAtIndex = TimelineList.BatchSize * this.state.currentPage
    const canScroll = stopAtIndex >= items.length


  	const itemView = items.length === 0 && this.props.events.length > 0 ? (<h2>No items found for query</h2>)
  	: items.slice(0, stopAtIndex).map(e => (
		 <TimelineItem key={e.id} {...e}/>
	))

  	//format date data
    return (
	    <div className="timeline">
	    	<Toolbar 
	    	onQueryChange={this.onQueryChange} 
	    	onSortOrderChange={this.onSortOrderChange} />
		    {itemView}
        <button disabled={canScroll} onClick={this.nextPage} >Load more</button>
	    </div>
     )
  }
}

export default TimelineList;
