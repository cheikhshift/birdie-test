import React from 'react';
import { Event } from '../../../backend/src/db/types'
import Toolbar  from './Toolbar'

import "./Table.css"


class TableList extends React.Component<{
	events : Event[]
},{}> {
  
   state = {
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

 onSortOrderChange = (order : string) : void => {
   this.setState(prevState => {
     return {
       ...prevState,
       sortOrder : parseInt(order)
     }
   })  
 }


  getCaregiver(id : string) : string{
    return "Placeholder Caregiver name"
  }

  render(){

    const items = Toolbar.filterItems(
      this.props.events,
      this.state.query,
      this.state.sortOrder
    )


    return (
     <div>
       <Toolbar 
        onQueryChange={this.onQueryChange} 
        onSortOrderChange={this.onSortOrderChange} />
  	   <table className="events">
         <thead>
            <tr>
              <th >Mood</th>
              <th style={{"width" : "40%"}}>Time</th>
              <th>Caregiver</th>
            </tr>
          </thead>
          <tbody>
            {items.map(ev => (
              <tr key={ev.id}>
                <td>{ev.mood}</td>
                <td>{new Date(ev.timestamp).toLocaleString()}</td>
                <td>{this.getCaregiver(ev.caregiver_id)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     )
  }
}

export default TableList;
