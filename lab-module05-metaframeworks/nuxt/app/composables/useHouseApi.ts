import type { House } from "~/types/house";

export const useHouseApi = () => {
	const config = useRuntimeConfig();

	const getHouseList = (): Promise<House[]> =>
		$fetch(`${config.public.apiBaseUrl}/api/houses`);

	const getHouse = (id: string): Promise<House> =>
		$fetch(`${config.public.apiBaseUrl}/api/houses/${id}`);

	const bookHouse = (house: House): Promise<boolean> =>
		$fetch(`${config.public.apiBaseUrl}/api/houses/${house.id}`, {
			method: "PATCH",
			body: house,
		});

	return {
		getHouseList,
		getHouse,
		bookHouse,
	};
};
