import app from "./app.js";
import sequelize from "./database/config.js";

sequelize
  .authenticate()
  .then(() => {
    console.log("Database sync complete");
    app.listen(app.get("port"), () => {
      console.log(`App live on: http://localhost:${app.get("port")}`);
    });
  })
  .catch((err) => console.error("Error syncing database:", err));
