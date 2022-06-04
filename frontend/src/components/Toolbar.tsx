import React from 'react';
import './Toolbar.css'


class Toolbar extends React.Component<{
	onQueryChange :  (mood: string) => void,
	onSortOrderChange :  (order: string) => void,
	onSortByChange : (sortBy: string) => void
},{}> {
  
  updateText = (e : any) => {
  	this.props.onQueryChange(e.target.value)
  }

  updateOrder = (e : any) => {
  	this.props.onSortOrderChange(e.target.value)
  }

  updateSorting = (e : any) => {
  	this.props.onSortByChange(e.target.value)
  }

  
  render(){

  	//format date data
    return (
	    <div className="toolbar">
	    	<select onChange={this.updateSorting}>
	    		<option value="">SORT BY</option>
	    		<option value="mood">MOOD</option>
	    		<option value="timestamp">TIME</option>
	    	</select>
	    	<select onChange={this.updateOrder}>
	    		<option value="">SORT ORDER</option>
	    		<option value="-1">DESCENDING</option>
	    		<option value="1">ASCENDING</option>
	    	</select>
		  	<input type="text" onChange={this.updateText} placeholder="Filter by mood type" />
	    </div>
     )
  }
}

export default Toolbar;
