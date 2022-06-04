import React from 'react';
import './Toolbar.css'

import { Event } from '../../../backend/src/db/types'

class Toolbar extends React.Component<{
	onQueryChange :  (mood: string) => void,
	onSortOrderChange :  (order: string) => void,
},{}> {
  
  updateText = (e : any) => {
  	this.props.onQueryChange(e.target.value)
  }

  updateOrder = (e : any) => {
  	this.props.onSortOrderChange(e.target.value)
  }

  
  // static method to sort items,
  // shared by both classes.
  public static filterItems(items : Event[], query : string, sortOrder : number) : Event[] {
  	var result = items.filter(ev => {
  		var md = ev.mood as string
  		return md.includes(query)
  	})


  	result.sort((a : Event, b : Event) => {
  		const aa = new Date(a.timestamp).getTime()
  		const bb = new Date(b.timestamp).getTime()

  		if(sortOrder === -1)
  			return bb - aa

  		return aa - bb
  	})


  	return result

  } 
  
  render(){

  	//format date data
    return (
	    <div className="toolbar">
	    	<label>SORT BY  </label><select aria-label="sort-field" onChange={this.updateOrder}>
	    		<option value="-1">MOST RECENT</option>
	    		<option value="1">OLDEST</option>
	    	</select>
		  	<input aria-label="query-field" type="text" onChange={this.updateText} placeholder="Filter by mood type" />
	    </div>
     )
  }
}

export default Toolbar;
