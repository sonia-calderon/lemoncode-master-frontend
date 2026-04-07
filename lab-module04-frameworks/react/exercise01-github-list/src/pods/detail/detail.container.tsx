import React from "react";
import { MemberDetailEntity } from "./detail.vm";
import { DetailComponent } from "./detail.component";
import { getMemberCollection } from "./detail.repository";

interface Props {
	login: string;
}

export const DetailContainer: React.FC<Props> = (props) => {
	const { login } = props;
	const [member, setMember] = React.useState<MemberDetailEntity>();

	React.useEffect(() => {
		getMemberCollection(login).then((memberDetail) => setMember(memberDetail));
	}, []);

	return member ? <DetailComponent member={member} /> : null;
};
