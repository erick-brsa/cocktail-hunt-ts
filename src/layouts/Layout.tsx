import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import { useAppStore } from '../stores/useAppStore';
import Notification from '../components/Notification';
import Header from '../components/Header';
import Modal from '../components/Modal';

export default function Layout() {

	const { loadFromStorage } = useAppStore();

	useEffect(() => {
		loadFromStorage();
	}, []);
	
	return (
		<>
			<Header />
			<main className="container mx-auto py-16 max-w-6xl px-10 lg:max-w-7xl">
				<Outlet />
			</main>
			<Modal />
			<Notification />
		</>
	);
}
