const db = require("../models");
const PageViews = db.pageViews;
const Op = db.Sequelize.Op;

// Find a single pageView with an id
exports.findOne = (req, res) => {
    const id = req.params.pgvw_id;
    PageViews. findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Pagge View with id=" + id
      });
    });
};