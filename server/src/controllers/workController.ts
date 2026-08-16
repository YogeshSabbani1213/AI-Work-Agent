import { Request, Response } from "express";
import prisma from "../db/prisma.js";

// Handles POST /api/work
export const processWork = async (req: Request, res: Response): Promise<void> => {
  const { request } = req.body;

  // Validate the request before accessing the database.
  if (!request || typeof request !== "string" || !request.trim()) {
    res.status(400).json({
      success: false,
      message: "Work request is required."
    });
    return;
  }

  try {
    // Create a new WorkRequest record in MySQL.
    const workRequest = await prisma.workRequest.create({
      data: {
        originalRequest: request.trim()
      }
    });

    res.status(201).json({
      success: true,
      message: "Work request saved successfully.",
      data: workRequest
    });
  } catch (error) {
    console.error("Failed to save work request:", error);

    res.status(500).json({
      success: false,
      message: "Failed to save work request."
    });
  }
};