import { z } from "zod";
import { CategoriesAPIRespondeSchema, SearchFilterSchema } from "../schemas/recipes-schema";

// export type Category = { strCategory: string; }
export type Categories = z.infer<typeof CategoriesAPIRespondeSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
