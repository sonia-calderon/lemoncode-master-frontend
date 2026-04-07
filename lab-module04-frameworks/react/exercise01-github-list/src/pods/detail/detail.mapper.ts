import * as vm from "./detail.vm";
import * as api from "./api/detail.api-model";

export const mapMemberFromApiToVm = (
	member: api.MemberDetailEntityApi,
): vm.MemberDetailEntity => ({
	id: member.id,
	login: member.login,
	name: member.name,
	company: member.company,
	bio: member.bio,
});
