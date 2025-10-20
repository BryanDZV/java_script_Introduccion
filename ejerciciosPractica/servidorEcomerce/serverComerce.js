import express from "express";
import dotenv from "dotenv";
import routesComerce from "./routes/routesComerce.js"; // OJO: añade .js

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("servidor funcionando en 3001");
  res.send("Servidor funcionando");
});

app.use("/api/products", routesComerce);

app.listen(port, () => {
  console.log("ok puerto:: http://localhost:" + port);
});
