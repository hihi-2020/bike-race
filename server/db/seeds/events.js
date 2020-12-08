exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("events")
    .del()
    // .then(function () {
    //   // Inserts seed entries
    //   return knex("events").insert([
    //     {
    //       eventName: "Pedle to the pub",
    //       description: "fun race to the pub",
    //       startPoint: "[174.7739, -41.2970]",
    //       endPoint: "[174.7840, -41.2938]",
    //       startTime: "1607706000",
    //       maxGroupSize: 5,
    //       distance: "15",
    //       creator_id: 1,
    //     },
    //     {
    //       eventName: "more peddling",
    //       description: "lets go to the pubb",
    //       startPoint: "[174.7739, -41.2970]",
    //       endPoint: "[174.7840, -41.2938]",
    //       startTime: "1607703433",
    //       maxGroupSize: 5,
    //       distance: "2",
    //       creator_id: 2,
    //     },
    //     {
    //       eventName: "less peddling more drinking",
    //       description: "lets go to the pubb",
    //       startPoint: "[174.7739, -41.2970]",
    //       endPoint: "[174.7840, -41.2938]",
    //       startTime: "1507703433",
    //       maxGroupSize: 7,
    //       distance: "2",
    //       creator_id: 2,
    //     },
    //   ])
    // })
}
