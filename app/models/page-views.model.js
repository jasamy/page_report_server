module.exports = (sequelize, Sequelize) => {
  const PageViews = sequelize.define("page_views", {
    pgvw_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });

  return PageViews;
};