import express from "express";
import dotenv from "dotenv";
import countriesRoutes from "./routes/countriesRoutes.js";

import marvelRoutes from "./routes/marvelRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("SERVIDOR FUNCIONA");
});

// router
app.use("/api/countries", countriesRoutes);
app.use("/api/marvel", marvelRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
