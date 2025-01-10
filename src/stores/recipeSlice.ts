import { StateCreator } from 'zustand';
import { getCategories, getRecipes } from '../services/RecipeService';
import { Categories, SearchFilter } from '../types';

export type RecipesSliceType = {
	ingredient: string;
	categories: Categories;
	fetchCategories: () => Promise<void>;
	searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
};

export const createRecipeSlice: StateCreator<RecipesSliceType> = set => ({
	ingredient: '',
	categories: {
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
		console.log(drinks);
	}
});
