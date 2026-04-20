import React from "react";
import { MemberDetailEntity } from "./detail.vm";
import { DetailComponent } from "./detail.component";
import { getMemberCollection } from "./detail.repository";

interface Props {
	org: string;
	login: string;
}

export const DetailContainer: React.FC<Props> = (props) => {
	const { org, login } = props;
	const [member, setMember] = React.useState<MemberDetailEntity>();

	React.useEffect(() => {
		getMemberCollection(login).then((memberDetail) => setMember(memberDetail));
	}, [login]);

	return member ? <DetailComponent member={member} org={org} /> : null;
};
