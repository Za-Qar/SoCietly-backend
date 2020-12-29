const { query } = require("../db/index");

async function getUserEvents(id){
    console.log("this is models id: ", id)
    const res = await query(`
    SELECT Events.uid, users.id, users.name FROM Events
    LEFT JOIN users
    ON Events.uid = users.id
    WHERE Events.uid = ${id} AND users.id= ${id};`)
    console.log("this is res.rows: ", res.rows)
    return res.rows
}

/*-----------Patch User Events----------*/
async function patchUserEvent(value, id, uid){
    //user
    //Page events
    //See all of their events ✅
    //Each event has the same uid but different id ✅
    //User will click on desired event to edit ✅+
    //Patch event where EventCreatedBy uid is id ✅
    const res = await query(
        `
        UPDATE Events
        LEFT JOIN users
        ON Events.uid = users.id
    
        SET eventName = COALESCE($1, eventName),
          eventType = COALESCE($2, eventType), 
          uid = COALESCE($3, uid),
          date = COALESCE($4, date),
          time = COALESCE($5, time),
          description = COALESCE($6, description),
          image = COALESCE($7, image),
          location = COALESCE($8, location),
          enableVolunteers = COALESCE($9, enableVolunteers),
          attendingList = COALESCE($10, attendingList),
          likes = COALESCE($11, likes),
          volunteerList = COALESCE($12, volunteerList)
        WHERE id = ${id}
          `,
          [
            value.eventName,
            value.eventType,
            value.uid,
            value.date,
            value.time,
            value.description,
            value.image,
            value.location,
            value.enableVolunteers,
            value.attendingList,
            value.likes,
            value.volunteerList,
          ]
    )
    }

// Delete event where EventCreatedBy 
module.exports = { 
    patchUserEvent,
    getUserEvents,
};

// `SELECT * FROM Events
//     LEFT JOIN users
//     ON Events.uid = users.id`


