import { create } from 'zustand';
import { createRecipeSlice, RecipesSliceType } from './recipeSlice';
import { devtools } from 'zustand/middleware';
import { createFavoritesSlice, FavoritesSliceType } from './favoritesSlice';
import { createNotificationSlice, NotificationSliceType } from './notificationSlice';

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(
	devtools((...args) => ({
		...createRecipeSlice(...args),
		...createFavoritesSlice(...args),
		...createNotificationSlice(...args)
	}))
);
