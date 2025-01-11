import { StateCreator } from 'zustand';
import { getCategories, getRecipes } from '../services/RecipeService';
import { Categories, Drinks, SearchFilter } from '../types';

export type RecipesSliceType = {
	ingredient: string;
	categories: Categories;
	drinks: Drinks;
	fetchCategories: () => Promise<void>;
	searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
};

export const createRecipeSlice: StateCreator<RecipesSliceType> = set => ({
	ingredient: '',
	categories: {
		drinks: []
	},
	drinks: {
		drinks: []
	},
	fetchCategories: async () => {
		const categories = await getCategories();
		set({
			categories
		});
	},
	searchRecipes: async filters => {
		const drinks = await getRecipes(filters);
		set({
			drinks
		})
	}
});
