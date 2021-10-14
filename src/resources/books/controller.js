const db = require("../../utils/database");

function createOne(req, res) {
  const createOne = `
    INSERT INTO books
      (title, type, author, topic, publicationDate)
    VALUES
      ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  db.query(createOne, Object.values(req.body))
    .then((result) => res.json({ data: result.rows[0] }))
    .catch(console.error);
}

function getAll(req, res) {
  const getAll = `
    SELECT *
    FROM books;
  `;

  db.query(getAll)
    .then((result) => res.json({ data: result.rows }))
    .catch(console.error);
}

function getOneById(req, res) {
  const idToGet = req.params.id;

  const getOneById = `
    SELECT *
    FROM books
    WHERE id = $1;
  `;

  db.query(getOneById, [idToGet])
    .then((result) => res.json({ data: result.rows[0] }))
    .catch(console.error);
}

const updateOneById =  (req, res) => {
  const bookToUpdate = {
    id: req.params.id,
    ...req.body,
  };

  const updateOneByIdSQL = `
  UPDATE books 
  SET title = $1,
  type = $2,
  author = $3,
  topic = $4,
  publicationdate = $5,
  WHERE id = $6
  RETURNING *
  `;

  const { title, type, author, topic, publicationdate, id} = bookToUpdate;

  db.query(updateOneByIdSQL, [title, type, author, topic, publicationdate, id])
  .then((result) => res.json({ data: result.rows[0] }))
  .catch(console.error);
}

const updateById = (req, res) => {
  const id = req.params.id;
  const bookToUpdate = req.body;
  console.log(bookToUpdate);

  console.log(req.params.id);
  console.log(req.body);

  let sqlTemplate = `
    UPDATE books SET 
  `;

  const sqlParams = [];

  let i = 1;
  for (const key in bookToUpdate) {
    sqlTemplate += ` ${key} = $${i++},`;
    sqlParams.push(bookToUpdate[key])
  }

  sqlParams.push(id);
  
  sqlTemplate = sqlTemplate.slice(0, sqlTemplate.length - 1);
  sqlTemplate += ` WHERE id = $${i}`;
  sqlTemplate += ` returning *`

  console.log(sqlTemplate);
  console.log(sqlParams);

  db.query(sqlTemplate, sqlParams)
    .then(result => res.json({data: result.rows[0]}))
    .catch(console.error)
}

const deleteById = (req, res) => {
  const { id } = req.params;
  console.log(id);

  const deleteSQL=`
  DELETE FROM books 
  WHERE id = $1
  `;

  db.query(deleteSQL, [id])
  .then(result => res.json({ message: "Item ${id} deleted" }))
  .catch(console.error)
}

module.exports = {
  createOne,
  getAll,
  getOneById,
  updateOneById,
  updateById,
  deleteById
};
