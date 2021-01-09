const { query } = require("../db/index");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/*-----------------------Events-----------------------*/
/*-----------POST: Create event------------*/
async function createEvent(value) {
  // const uploaded = await cloudinary.uploader.upload(value.image, {
  //   upload_preset: "falcon5iveImages",
  // });
  // console.log(uploaded);

  const res = await query(
    `
    INSERT INTO events(
        eventName, eventType, uid, date, time, description, image, location, enableVolunteers, attendingList, likes, volunteerList)
    VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)

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
  );
  return res;
}

async function imageUpload(image) {
  console.log(image);
  const uploaded = await cloudinary.uploader.upload(image, {
    upload_preset: "falcon5iveImages",
  });
  console.log(uploaded);
}

/*-----------GET: All events------------*/
async function getAllEvents() {
  const res = await query(`SELECT * FROM events`);
  return res.rows;
}

/*-----------PATCH: Events Patch------------*/
async function patchEvent(value, id) {
  console.log("this is value: ", value);
  console.log("this is id: ", id);
  const res = await query(
    `UPDATE events
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
  );
  return res;
}

/*-----------DELETE: Event------------*/
async function deleteEvent(id) {
  const result = await query(`
  DELETE FROM events WHERE id=${id};
  `);
  console.log(result);
}

module.exports = {
  createEvent,
  getAllEvents,
  patchEvent,
  deleteEvent,
};

// SELECT *
// FROM Events
// LEFT JOIN users
// ON Events.uid = users.id
