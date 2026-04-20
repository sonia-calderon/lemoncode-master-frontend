import { MemberEntity } from "./list.vm";
import { getMemberCollection as getMemberCollectionApi } from "./api/list.api";
import { mapMemberCollectionFromApiToVm } from "./list.mapper";

export const getMemberCollection = async (
	org: string,
): Promise<MemberEntity[]> => {
	const result = await getMemberCollectionApi(org);
	return mapMemberCollectionFromApiToVm(result);
};
