import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SingleEventMap from './SingleEventMap'
import {postUserToEvent, delUserFromEvent} from '../actions/events'

class EventDetails extends React.Component{
  render(){

    let eventDeatils = this.props.events.find(event => event.id == this.props.match.params.id)

    const currentTime = String(new Date(Date.now()/1000 ))
    let raceFullDate = String(new Date(eventDeatils.startTime * 1000))
    let raceDate = raceFullDate.slice(0,15)
    let raceTime = raceFullDate.slice(17,21)

    const addUserToEvent= ()=>{
      if(eventDeatils.attendees.length == eventDeatils.maxGroupSize){
        alert('This reace is full soz')
      }else{
        const addEvent={
            user_id: this.props.activeUser.id,
            event_id: parseInt(this.props.match.params.id)
        }
          this.props.dispatch(postUserToEvent(addEvent))
      }
    }
    const removeUserFromEvent= ()=>{
      const addEvent={
          user_id: this.props.activeUser.id,
          event_id: parseInt(this.props.match.params.id)
      }
        this.props.dispatch(delUserFromEvent(addEvent))
    }



    const joinOrLeaveEvent = (user, atten) =>{
      let atendents = eventDeatils.attendees.filter(atend => atend == this.props.activeUser.id)
      if(currentTime < raceFullDate == false){
        if(atendents.length == 0){
          return(
            <>
            <div className="listEventBtn button" id="button-5">
              <div id="translate"></div>
             <button onClick={()=> addUserToEvent()} className="actual-button">Join Event</button>
             </div>
            </>
            )
        }else{
          return(
            <>
            <div className="listEventBtn button" id="button-5">
              <div id="translate"></div>
            <button onClick={()=> removeUserFromEvent()} className="actual-button">Leave Event</button>
            </div>
            </>
            )
        }
      }
      
    
  }
    return (
      <>
      
      { eventDeatils && 
      <div>
      <h1 className="profilePageHeader">{eventDeatils.eventName}<br/></h1>
      <div className='testmap'>
       <SingleEventMap start={JSON.parse(eventDeatils.startPoint)} end={JSON.parse(eventDeatils.endPoint)}/>
      <div className='content_container-event-details'>
        Start Date: {raceDate}<br/>
        Start Time: {raceTime}<br/>
        Description: {eventDeatils.description}<br/>
       
        {joinOrLeaveEvent()} 
        Attending:
        <ul >
        {eventDeatils.attendees.map(attendent => {
            return(
             this.props.users.map(att =>{
               if(att.id == attendent){
                return(
                <div key={att.id}>
                  <li key={att.id} className="each_user" >
                    <Link to={`/users/${att.id}`}>
                      {att.username} 
                    </Link>
                  </li>
                </div>
                )}
              }))
            })}
        </ul>
        <div>
             Attendee Limit: {eventDeatils.attendees.length}/{eventDeatils.maxGroupSize}<br/>
            <Link to={`/events/${eventDeatils.id}/comments`} >
            Comments: {eventDeatils.comments.length}
            </Link><br/>
        </div>
      </div>
      </div>
      </div>
      }
      </>
    )
  }
}
function mapStateToProps(globalState){
  return{
    events: globalState.events,
    users: globalState.users,
    activeUser: globalState.activeUser
  }
}
export default connect(mapStateToProps)(EventDetails)
