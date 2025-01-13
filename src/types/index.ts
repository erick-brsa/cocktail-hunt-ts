import { z } from "zod";
import { CategoriesAPIRespondeSchema, DrinkAPIResponse, DrinksAPIResponse, RecipeAPIResponseSchema, SearchFilterSchema } from "../schemas/recipes-schema";

// export type Category = { strCategory: string; }
export type Categories = z.infer<typeof CategoriesAPIRespondeSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type Drinks = z.infer<typeof DrinksAPIResponse>;
export type Drink = z.infer<typeof DrinkAPIResponse>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;
