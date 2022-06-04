import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimelineList from './components/TimelineList'
import TableList from './components/TableList'
import { Event } from '../../backend/src/db/types'

class App extends React.Component<{}, {
  events : Event[],
  tableMode : boolean
}> {

   state = {
      events : [{  
         "id":"decaa026-2ce5-49cb-aff9-92326b85a98c",
         "event_type":"mood_observation",
         "visit_id":"39b94aab-cc35-4874-807f-c23472aec663",
         "timestamp":"2019-04-23T10:53:13+01:00",
         "caregiver_id":"4786d616-259e-4d52-80f7-8cf7dc6d881a",
         "care_recipient_id":"03f3306d-a4a3-4179-ab88-81af66df8b7c",
         "mood":"okay",
      },
      {  
         "id":"decaa026-2ce5-49cb-aff9-92326b85a9c",
         "event_type":"mood_observation",
         "visit_id":"39b94aab-cc35-4874-807f-c23472aec663",
         "timestamp":"2019-05-23T10:53:13+01:00",
         "caregiver_id":"4786d616-259e-4d52-80f7-8cf7dc6d881a",
         "care_recipient_id":"03f3306d-a4a3-4179-ab88-81af66df8b7c",
         "mood":"bad",
      },
      {  
         "id":"decaa026-2ce5-49cb-aff9-92326b85a",
         "event_type":"mood_observation",
         "visit_id":"39b94aab-cc35-4874-807f-c23472aec663",
         "timestamp":"2019-04-23T10:53:13+01:00",
         "caregiver_id":"4786d616-259e-4d52-80f7-8cf7dc6d881a",
         "care_recipient_id":"03f3306d-a4a3-4179-ab88-81af66df8b7c",
         "mood":"okay",
      }],
      tableMode : false
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
