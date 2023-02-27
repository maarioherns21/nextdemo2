import express from "express";
const router = express.Router();

router.get("/");

router.post("/login");

router.post("/signup");

router.delete("/:id");

export default router;
