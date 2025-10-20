import express from "express";
import { getProductsAll } from "../controller/controllerComerce.js"; // OJO: añade .js

const router = express.Router();

router.get("/", getProductsAll);

export default router;
