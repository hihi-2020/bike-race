const connection = require('./connection')

function getEvents (db = connection) {
  return db('events').select()
}

function getComments (db = connection) {
  return db('comments').select()
}

function getAttendees (db = connection) {
  return db('users_events').select()
}

function getUsers (db = connection) {
  return db('users').select()
}

function addEvent (newEvent, db = connection) {
  return db('events').insert(newEvent, 'id')
    .then((ids) => {
      return db('users_events').insert( { user_id: newEvent.creator_id, event_id: ids[0] } )
    })
}

function addUser (user, db = connection) {
  return db('users').insert(user, 'id')
}

function editUser (id, user, db = connection) {
  return db('users').update(user).where('id', id)
}

function addComment (comment, db = connection) {
  return db('comments').insert(comment, 'id')
}


function addUserToEvent(activeUser, db = connection){
  return db('users_events').insert(activeUser, {
    user_id: activeUser.user_id,
    event_id: activeUser.event_id
  })
}

function removeUserFromEvent(activeUser, db = connection){
  return db('users_events')
  .where('event_id', activeUser.event_id)
  .where('user_id', activeUser.user_id)
  .delete()
}


module.exports = {
  getEvents,
  getComments,
  getAttendees,
  getUsers,
  addEvent,
  addUser,
  addComment,
  addUserToEvent,
  editUser,
  removeUserFromEvent
}
