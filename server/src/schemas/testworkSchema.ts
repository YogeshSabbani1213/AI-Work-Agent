import { workInterpretationSchema } from "./workSchema.js";

const testData = {
  title: "Partner meeting follow-up",
  summary: "Follow up with the partner after the meeting.",
  actionItems: [
    {
      description: "Draft a thank-you email",
      priority: "medium",
      automatable: true
    }
  ],
  priority: "medium",
  deadline: null,
  missingInformation: [],
  automatableActions: ["Draft a thank-you email"],
  humanConfirmation: ["Approve the email before completion"]
};

const result = workInterpretationSchema.safeParse(testData);

if (result.success) {
  console.log("Valid AI structure:", result.data);
} else {
  console.error("Invalid structure:", result.error.issues);
}