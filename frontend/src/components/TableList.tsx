import React from 'react';
import { Event } from '../../../backend/src/db/types'
import Toolbar  from './Toolbar'
import TableNav from './TableNav'

import "./Table.css"


class TableList extends React.Component<{
	events : Event[]
},{}> {
  
   state = {
    sortOrder : -1,
    query : "",
    currentPage : 0,
    pageSize : 20
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

 onPageSet = (page : number) : void => {
   window.scrollTo(0, 0)
   this.setState(prevState => {
     return {
       ...prevState,
       currentPage : page
     }
   })  
 } 

 onPageSizeSet = (page : number) : void => {
   window.scrollTo(0, 0)
   this.setState(prevState => {
     return {
       ...prevState,
       pageSize : page,
       currentPage : 0
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

    const offset = this.state.currentPage * this.state.pageSize
    const pages = Math.ceil(items.length/this.state.pageSize)


    return (
     <div>
       <Toolbar 
        onQueryChange={this.onQueryChange} 
        onSortOrderChange={this.onSortOrderChange} />
  	   <table className="events">
         <thead>
            <tr>
              <th >Type</th>
              <th >Mood</th>
              <th style={{"width" : "40%"}}>Time</th>
              <th>Caregiver</th>
              <th >Notes</th>
            </tr>
          </thead>
          <tbody>
            {items
              .slice(offset, offset + this.state.pageSize)
              .map(ev => (
              <tr className="table-row" key={ev.id}>
                <td>{ev.event_type}</td>
                <td>{ev.mood}</td>
                <td>{new Date(ev.timestamp).toLocaleString()}</td>
                <td>{this.getCaregiver(ev.caregiver_id)}</td>
                <td>{ev.payload.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <TableNav 
          onPageSizeSet={this.onPageSizeSet} 
          onPageSet={this.onPageSet}
          pages={pages} 
          currentPage={this.state.currentPage}
          />
      </div>
     )
  }
}

export default TableList;
