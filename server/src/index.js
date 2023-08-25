import app from "./app.js";

app.listen(app.get("port"), () => {
  console.log(`App live on: http://localhost:${app.get("port")}`);
});
