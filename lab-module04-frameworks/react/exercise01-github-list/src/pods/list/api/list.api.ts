import { MemberEntityApi } from "./list.api-model";

export const getMemberCollection = async (
	org: string,
): Promise<MemberEntityApi[]> => {
	let allMembers: MemberEntityApi[] = [];
	let page = 1;
	const perPage = 100;
	const maxPages = 10;

	while (page <= maxPages) {
		const response = await fetch(
			`https://api.github.com/orgs/${org}/members?per_page=${perPage}&page=${page}`,
		);

		if (!response.ok) {
			throw new Error(`Organization ${org} not found`);
		}
		const data: MemberEntityApi[] = await response.json();

		if (data.length === 0) {
			break;
		}

		allMembers = [...allMembers, ...data];

		if (data.length < perPage) {
			break;
		}

		page++;
	}

	return allMembers;
};
