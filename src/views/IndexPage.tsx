import { useAppStore } from "../stores/useAppStore";

export default function IndexPage() {
	const { categories } = useAppStore()
	
	return (
		<>
			<h1>Página principal </h1>
		</>
	);
}
