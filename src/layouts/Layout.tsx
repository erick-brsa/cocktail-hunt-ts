import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Modal from '../components/Modal';

export default function Layout() {
	return (
		<>
			<Header />
			<main className="container mx-auto py-16 max-w-6xl px-10 lg:max-w-7xl">
				<Outlet />
			</main>
			<Modal />
		</>
	);
}
