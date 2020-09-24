const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
  });
});
