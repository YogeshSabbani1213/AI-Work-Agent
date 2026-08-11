import { Router } from "express";
import { processWork } from "../controllers/workController.js";

// Router allows us to create a separate group of API endpoints.
const router = Router();

// POST /api/work
// The actual "/api/work" prefix will be connected in app.ts.
router.post("/", processWork);

export default router;