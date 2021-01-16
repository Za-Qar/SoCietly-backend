const { query } = require("../db/index");

/*-----------------------Comment-----------------------*/
/*-----------POST: Create comment------------*/
async function createComment(value) {
  const res = await query(
    `
    INSERT INTO comments(
        commentUserId, name, surname, timeDate, commentEventId, profileImage, comment, likes)
    VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
    `,
    [
      value.commentUserId,
      value.name,
      value.surname,
      value.timeDate,
      value.commentEventId,
      value.profileImage,
      value.comment,
      value.likes,
    ]
  );
  return res.rows[0];
}

/*-----------GET: All comments------------*/
async function getAllComments() {
  const res = await query(`
  SELECT * FROM comments  LEFT JOIN events
  ON comments.commentEventId = events.eventId ORDER BY timeDate ASC;
  `);
  return res.rows;
}

/*-----------PATCH: Events Patch------------*/
async function patchComment(value, id) {
  console.log("this is comment: ", value);
  console.log("this is comment id: ", id);
  const res = await query(
    `UPDATE events
      SET commentUserId = COALESCE($1, commentUserId),
      name = COALESCE($2, name), 
      surname = COALESCE($3, surname),
      timeDate = COALESCE($4, timeDate),
      commentEventId = COALESCE($5, commentEventId),
      profileImage = COALESCE($6, profileImage),
      comment = COALESCE($7, comment),
      likes = COALESCE($8, likes),
      WHERE commentId = ${id}
      `,
    [
      value.commentUserId,
      value.name,
      value.surname,
      value.timeDate,
      value.commentEventId,
      value.profileImage,
      value.comment,
      value.likes,
    ]
  );
  return res;
}

/*-----------DELETE: Event------------*/
async function deleteComment(id) {
  const result = await query(`
  DELETE FROM comments WHERE commentId=${id};
  `);
  console.log(result);
}

module.exports = {
  createComment,
  getAllComments,
  patchComment,
  deleteComment,
};

// SELECT *
// FROM Events
// LEFT JOIN users
// ON Events.uid = users.id
