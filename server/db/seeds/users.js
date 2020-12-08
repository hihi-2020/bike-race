exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('users').insert([
//         {
//           id: 1,
//           username: 'wonderphil',
//           email: 'phillip.wood369@gmail.com',
//           imgURL: 'https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1395&q=80',
//           bikeType: 'BMX'
//         },

//         {
//           id: 2,
//           username: 'airborn',
//           email: 'blackie@gmail.com',
//           imgURL: 'https://s3.amazonaws.com/law-media/uploads/131/19842/large/bike_20drunk-optimized.jpg?1450332558',
//           bikeType: 'road bike'
//         },

//         {
//           id: 3,
//           username: 'bonecrusher',
//           email: 'rose@gmail.com',
//           imgURL: 'https://alchetron.com/cdn/sarah-walker-bmx-rider-e5e6abf1-fd8c-4070-b41f-1eef9785984-resize-750.jpeg',
//           bikeType: 'road bike'
//         },

//         {
//           id: 4,
//           username: 'ghostrider',
//           email: 'manu@gmail.com',
//           imgURL: 'https://images.unsplash.com/photo-1565109698955-47a3acedd48e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
//           bikeType: 'road bike'
//         },

//         {
//           id: 5,
//           username: 'rocketrider',
//           email: 'gareth@gmail.com',
//           imgURL: 'https://s3.amazonaws.com/law-media/uploads/131/19842/large/bike_20drunk-optimized.jpg?1450332558',
//           bikeType: 'bmx'
//         }
//       ])
//     })
}