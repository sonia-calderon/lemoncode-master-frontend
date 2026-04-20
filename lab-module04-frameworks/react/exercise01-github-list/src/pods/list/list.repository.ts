import { MemberEntity } from "./list.vm";
import { getMemberCollection as getMemberCollectionApi } from "./api/list.api";
// CAMBIAR EN PROD
//import { getMemberCollection as getMemberCollectionApi } from "./api/list.api.mock";
import { mapMemberCollectionFromApiToVm } from "./list.mapper";

export const getMemberCollection = async (
	org: string,
): Promise<MemberEntity[]> => {
	const result = await getMemberCollectionApi(org);
	return mapMemberCollectionFromApiToVm(result);
};
