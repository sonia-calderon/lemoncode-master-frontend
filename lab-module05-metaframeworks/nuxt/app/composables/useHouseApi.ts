import type { House } from "~/types/house";

export const useHouseApi = () => {
	const config = useRuntimeConfig();

	const getHouseList = (): Promise<House[]> =>
		$fetch(`${config.public.apiBaseUrl}/api/houses`);

	const getHouse = (id: string): Promise<House> =>
		$fetch(`${config.public.apiBaseUrl}/api/houses/${id}`);

	return {
		getHouseList,
		getHouse,
	};
};
