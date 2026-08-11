import { Request, Response } from "express";

// Request and Response are TypeScript types provided by Express.
// Request represents information coming from the client.
// Response represents what our server sends back to the client.
export const processWork = (req:Request,res:Response): void => {
  // req.body contains the JSON data sent by the frontend.
  const { request } = req.body;

  // Basic validation.
  // We don't want to process an empty request.
  if (!request || typeof request !== "string" || !request.trim()) {
    res.status(400).json({
      success: false,
      message: "Work request is required."
    });
  }

  // For now, we are only testing the full-stack connection.
  // Later, this controller will call our AI/agent service.
  res.status(200).json({
    success: true,
    message: "Work request received successfully.",
    data: {
      request
    }
  });
};