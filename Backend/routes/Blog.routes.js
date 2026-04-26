import { Router } from "express";

const router = Router();

// Create a blog
router.post("/", (req, res) => {
    res.send("Create a blog");
});

// Get all blogs
router.get("/", (req, res) => {
    res.send("Get all blogs");
});

// Get single blog
router.get("/:id", (req, res) => {
    res.send(`Get blog with id ${req.params.id}`);
});

// Update blog
router.put("/:id", (req, res) => {
    res.send(`Update blog with id ${req.params.id}`);
});

// Delete blog
router.delete("/:id", (req, res) => {
    res.send(`Delete blog with id ${req.params.id}`);
});

export default router;
