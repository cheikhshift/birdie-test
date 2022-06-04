import React from 'react';
import { Event } from '../../../backend/src/db/types'
import "./Table.css"

class TableList extends React.Component<{
	events : Event[]
},{}> {
  

   getCaregiver(id : string) : string{
    return "Placeholder Caregiver name"
  }

  render(){


    return (
	   <table className="events">
       <thead>
          <tr>
            <th >Mood</th>
            <th style={{"width" : "40%"}}>Time</th>
            <th>Caregiver</th>
          </tr>
        </thead>
        <tbody>
          {this.props.events.map(ev => (
            <tr key={ev.id}>
              <td>{ev.mood}</td>
              <td>{new Date(ev.timestamp).toLocaleString()}</td>
              <td>{this.getCaregiver(ev.caregiver_id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
     )
  }
}

export default TableList;
