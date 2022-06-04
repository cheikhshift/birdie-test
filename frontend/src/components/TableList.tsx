import React from 'react';


class TableList extends React.Component<{
	events : any[] // referring to this as any to avoid importing interface decl from backend code.
},{}> {
  

  // TODO - write function to update events 
  // after given interval

  render(){

  	//format date data
  	this.props.events.map(ev => ev.timestamp = new Date(ev.timestamp).toLocaleString())

    return (
	    <div className="timeline">
		  
	    </div>
     )
  }
}

export default TableList;
