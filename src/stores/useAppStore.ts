import { create } from 'zustand';
import { createRecipeSlice, RecipesSliceType } from './recipeSlice';
import { devtools } from 'zustand/middleware';
import { createFavoritesSlice, FavoritesSliceType } from './favoritesSlice';

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(
	devtools((...args) => ({
		...createRecipeSlice(...args),
		...createFavoritesSlice(...args)
	}))
);
