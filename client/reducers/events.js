import { COMMENT_ADDED, SET_EVENTS, USER_ADDED_TO_EVENT, USER_REMOVE_FROM_EVENT } from "../actions/events"

const reducer = (state = [], action) => {
  let newState
  let event
  switch (action.type) {
    case SET_EVENTS:
      return action.events

    case COMMENT_ADDED:
     newState = [...state]
    event = newState.find(event => event.id == action.id)
      event.comments.push(action.comment)
      return newState

    case USER_ADDED_TO_EVENT:
    newState = [...state]
    event = newState.find(event => event.id == action.attendees.event_id)
    event.attendees.push(action.attendees.user_id)
    return newState

    case USER_REMOVE_FROM_EVENT:
    newState = [...state]
    event = newState.find(event => event.id == action.attendees.event_id)
    let newAtt = event.attendees.filter(att => att != action.attendees.user_id)
    event.attendees = newAtt
    return newState
    default:
      return state
  }
}

export default reducer
