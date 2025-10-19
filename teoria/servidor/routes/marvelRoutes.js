import express from "express";
import { getMarvelCharacters } from "../controllers/marvelController.js";

const router = express.Router();

router.get("/", getMarvelCharacters);

export default router;
