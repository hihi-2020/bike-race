import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class UserProfile extends React.Component {

  attendingEvents = this.props.events.filter(event => event.attendees.includes(this.props.activeUser.id))

  render() {
    const currentTime = Date.now() / 1000
    return (
      this.props.activeUser ? <div>
        <div>
          <h1 className='profilePageHeader'>Profile</h1>
          <div className='profileImageContainer'>
            <img src={this.props.activeUser.imgURL} className='profilePicture' />
          </div>
        </div>

        <div className='infoBorder'>
          <div className='userInfoPP'>
            <h3>Username: {this.props.activeUser.username}</h3>
            <h3>Email: {this.props.activeUser.email}</h3>
            <h3>Bike type: {this.props.activeUser.bikeType}</h3>
          </div>


          <div className='upcomingEventsContainer'>
            <h3>Upcoming events</h3>
            {this.attendingEvents.map(event => {
              if (event.startTime >= currentTime) {
                return (
                  <>
                  <ul key={event.id} >
                    <Link to={`/events/${event.id}`} className='upcomingEventsLink'>
                      <li className='upcomingEventsList'>{event.eventName}</li>
                    </Link>
                  </ul>
                  </>
                )
              }
            })}
          </div>

          <div className='upcomingEventsContainer'>
            <h3>Past events</h3>
          {this.attendingEvents.map(event => {
              if (event.startTime < currentTime) {

                return (
                  <>
                  <ul key={event.id} >
                    <Link to={`/events/${event.id}`} className='upcomingEventsLink'>
                      <li className='upcomingEventsList'>{event.eventName}</li>
                    </Link>
                  </ul>
                  </>
                )
              }
            })}
          </div>

          <div className="button" id="button-5">
            <div id="translate"></div>
            <Link className="actual-button" to="/users/active/edit">
              Edit Profile
            </Link>
          </div>
        </div>

      </div> : null
    )
  }
}

function mapStateToProps(globalState) {
  return {
    activeUser: globalState.activeUser,
    events: globalState.events

  }
}

export default connect(mapStateToProps)(UserProfile)