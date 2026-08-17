import { z } from "zod";

// Defines one action that the AI identifies from the user's request.
const actionItemSchema = z.object({
  description: z.string(),
  priority: z.enum(["low", "medium", "high"]),
  automatable: z.boolean()
});

// Defines the complete structured interpretation returned by the AI.
export const workInterpretationSchema = z.object({
  title: z.string(),
  summary: z.string(),
  actionItems: z.array(actionItemSchema),
  priority: z.enum(["low", "medium", "high", "urgent"]),
  deadline: z.string().nullable(),
  missingInformation: z.array(z.string()),
  automatableActions: z.array(z.string()),
  humanConfirmation: z.array(z.string())
});

// TypeScript automatically creates a type from our Zod schema.
export type WorkInterpretation = z.infer<typeof workInterpretationSchema>;