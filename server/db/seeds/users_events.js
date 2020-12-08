exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_events').del()
    // .then(function () {
    //   // Inserts seed entries
    //   return knex('users_events').insert([
    //     { user_id: 1, event_id: 1 },
    //     { user_id: 2, event_id: 1 },
    //     { user_id: 3, event_id: 2 },
    //     { user_id: 4, event_id: 2 },
    //     { user_id: 5, event_id: 2 },
    //   ])
    // })
}
