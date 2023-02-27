import express from "express";
import { index } from "../controllers/movies.js";
const router = express.Router();

router.get("/", index);

router.post("/add");

router.delete("/:id");

router.patch("/:id");

router.post("/:id/comments");

router.post("/:id/likes");

export default router;
