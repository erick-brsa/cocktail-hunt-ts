import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';

export default function Header() {

	useEffect(() => {
		fetchCategories();
	}, []);
	
	const { pathname } = useLocation();

	const [searchFilters, setSearchFilters] = useState({
		ingredient: '',
		category: ''
	})

	const isHome = useMemo(() => pathname === '/', [pathname]);

	const { fetchCategories, searchRecipes, categories } = useAppStore();

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setSearchFilters({
			...searchFilters,
			[e.target.name]: e.target.value
		})
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validar
		if (Object.values(searchFilters).includes('')) {
			console.log('Todos los campos son obligatorios');
			return;
		}

		searchRecipes(searchFilters);
		console.log(searchFilters);
		
	};

	return (
		<header
			className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}
		>
			<div className="mx-auto container px-5 py-16 max-w-7xl">
				<div className="flex justify-between items-center">
					<div className="">
						<img src="/logo.svg" alt="Logotipo" className="w-32" />
					</div>

					<nav className="flex gap-4">
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'text-orange-500 font-bold uppercase'
									: 'text-white font-bold uppercase'
							}
							to="/"
						>
							Inicio
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'text-orange-500 font-bold uppercase'
									: 'text-white font-bold uppercase'
							}
							to="/favoritos"
						>
							Favoritos
						</NavLink>
					</nav>
				</div>
				{isHome && (
					<form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6" onSubmit={handleSubmit}>
						<div className="space-y-4">
							<label
								htmlFor="ingredient"
								className="block text-white uppercase font-extrabold text-lg"
							>
								Nombre o Ingredientes
							</label>
							<input
								id="ingredient"
								type="text"
								name="ingredient"
								className="p-3 w-full rounded-lg focus:outline-none"
								placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Café, etc."
								onChange={handleChange}
								value={searchFilters.ingredient}
							/>
						</div>
						<div className="space-y-4">
							<label
								htmlFor="category"
								className="block text-white uppercase font-extrabold text-lg"
							>
								Categoría
							</label>
							<select
								id="category"
								name="category"
								className="p-3 w-full rounded-lg focus:outline-none"
								onChange={handleChange}
								value={searchFilters.category}
							>
								<option value="">Seleccione</option>
								{categories.drinks.length > 0 &&
									categories.drinks.map(category => (
										<option
											key={category.strCategory}
											value={category.strCategory}
										>
											{category.strCategory}
										</option>
									))}
							</select>
						</div>
						<input
							type="submit"
							value="Buscar Recetas"
							className="cursor-pointer bg-orange-800 hover:bg-orange-900 font-extrabold text-white w-full p-2 rounded-lg uppercase"
						/>
					</form>
				)}
			</div>
		</header>
	);
}
