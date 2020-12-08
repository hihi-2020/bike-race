exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    // .then(function () {
    //   // Inserts seed entries
    //   return knex('comments').insert([
    //     {
    //       username: 'rocketrider', 
    //       comment: 'Hi all, looking top have a brezzy ride so anyone who wants ', 
    //       event_id: 1
    //     },
    //     {
    //       username: 'bigdog', 
    //       comment: 'p have a brezzy ride so anyone who wants ', 
    //       event_id: 2
    //     },
    //     {
    //       username: 'someone else', 
    //       comment: 'Hi ride so anyone who wants ', 
    //       event_id: 2
    //     },
    //   ])
    // })
}
