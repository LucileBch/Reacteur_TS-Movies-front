// ---------- Types ----------
// Packages import
import { z } from "zod";

// Movies Type
export const moviesSchema = z.array(
  z.object({
    id: z.string(),
    poster: z.string(),
    overview: z.string(),
    title: z.string(),
  })
);

export type TMovies = z.infer<typeof moviesSchema>;
