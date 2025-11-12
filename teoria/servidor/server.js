import express from "express";
import dotenv from "dotenv";
dotenv.config();
import countriesRoutes from "./routes/countriesRoutes.js";
import marvelRoutes from "./routes/marvelRoutes.js";

const app = express();
const port = process.env.PORT;

app.use(express.json()); //middelware para leer json

app.get("/", (req, res) => {
  res.send("SERVIDOR FUNCIONA");
});

// router
app.use("/api/countries", countriesRoutes);
app.use("/api/marvel", marvelRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
