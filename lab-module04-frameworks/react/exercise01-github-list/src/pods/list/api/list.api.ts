import { MemberEntityApi } from "./list.api-model";

export const getMemberCollection = (org: string): Promise<MemberEntityApi[]> =>
	fetch(`https://api.github.com/orgs/${org}/members`).then((response) =>
		response.json(),
	);
