import { z } from "zod";

export const profileSchema = z.object({
  displayName: z.string().min(2).max(50),
  username: z.string().min(2).max(30),
  // Add other fields as needed
});

export type ProfileFormData = z.infer<typeof profileSchema>;
