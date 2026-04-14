import { MemberEntity } from "./list.vm";
import { getMemberCollection as getMemberCollectionApi } from "./api/list.api";
// CAMBIAR EN PROD
//import { getMemberCollection as getMemberCollectionApi } from "./api/list.api.mock";
import { mapMemberCollectionFromApiToVm } from "./list.mapper";

export const getMemberCollection = (org: string): Promise<MemberEntity[]> => {
	return new Promise<MemberEntity[]>((resolve) => {
		getMemberCollectionApi(org).then((result) => {
			resolve(mapMemberCollectionFromApiToVm(result));
		});
	});
};
