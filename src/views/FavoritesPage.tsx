import { useMemo } from 'react';
import DrinkCard from '../components/DrinkCard';
import { useAppStore } from '../stores/useAppStore';

export default function FavoritesPage() {
	const { favorites } = useAppStore();
	const hasFavorites = useMemo(() => favorites.length, [favorites]);
	return (
		<>
			<h1 className="text-6xl font-extrabold">Favoritos</h1>

			{hasFavorites ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-10">
					{favorites.map(recipe => (
						<DrinkCard key={recipe.idDrink} drink={recipe} />
					))}
				</div>
			) : (
				<>
					<p className="text-2xl mt-10 text-center">
						Los favoritos se mostrarán aquí
					</p>
				</>
			)}
		</>
	);
}
