import React from 'react';

import logo from './logo.svg';
import './App.css';
import TimelineList from './components/TimelineList'
import TableList from './components/TableList'
import { Event } from '../../backend/src/db/types'

import { TestData } from './testdata'
import { getEvents, isDev, getEventCount } from './services/api'

class App extends React.Component<{}, {
  events : Event[],
  tableMode : boolean
}> {

   state = {
      events : [],
      tableMode : false
  }

  static BatchSize = 500


  componentDidMount(){
      getEventCount()
      .then( count => {

        const maxPages = Math.ceil(count/App.BatchSize)
        this.dispatchEventFetch(0, maxPages)

      })

  }

  dispatchEventFetch(page : number, maxPage : number){

    //execute on thread separate from main
    setTimeout((async () => {
     
      try {

         const nextPage = page + 1
         var newEvents = await getEvents(page, App.BatchSize)
         newEvents = this.state.events.concat(newEvents)
         this.updateEvents(newEvents)

         if(nextPage < maxPage) this.dispatchEventFetch(nextPage, maxPage)

      } catch(e) {

        if(isDev()){
          this.updateEvents(TestData)
        }
      }

     
    }).bind(this), 5)
  }

  updateEvents(events : Event[]){
    this.setState((prevState) => {
      return {
          ...prevState,
          events : events
        }
     })
  }

  public toggleTableMode = ()=> {

    let tableMode = this.state.tableMode ? false : true
    this.setState((prevState) => {
       return {
         ...prevState,
         tableMode
       }
    })
  }
  
  render(){

    const buttonText = this.state.tableMode ? "timeline" : "table"


    let viewPref = !this.state.tableMode ? <TimelineList  events={this.state.events} /> :
    <TableList events={this.state.events} />

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button id="toggleButton" onClick={this.toggleTableMode}>View as { buttonText }</button>     
        {viewPref}
      </div>
  )
  }
}

export default App;
