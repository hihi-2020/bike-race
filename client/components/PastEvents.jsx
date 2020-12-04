import React from 'react'
import { connect } from 'react-redux'

class PastEvents extends React.Component {

  render() {
    return (
      <>
      <h1 className='pastEventsHeader'>Past Events</h1>
         <ul>
        {this.props.events.map( event => { 
            //declears new date varible for current time/date

            // converts it into epoch time
            let currentTime = Date.now()/1000 
            
            // converts epoch race time to date/time string then slice out what we need to display
            let raceFullDate = String(new Date(event.startTime * 1000))
            let raceDate = raceFullDate.slice(0,15)
            let raceTime = raceFullDate.slice(17,21)
            console.log(currentTime > event.startTime)
           if(currentTime > event.startTime){
            return (
                <li key={event.id} 
                    className='event--li'>
                    <a href={`events/${event.id}`}>
                        <h2>{event.eventName}</h2>
                        <h4>{`Time ${raceTime}`}</h4>
                        <h4>{`Date ${raceDate}`}</h4>
                        <p>{event.description}</p>
                        
                    </a>
                </li>
            )
            }})}
        </ul>
      </>
    )
  }
}

function mapStateToProps (globalState) {
    return {
      events: globalState.events
    }
  }
  
  export default connect(mapStateToProps)(PastEvents)








