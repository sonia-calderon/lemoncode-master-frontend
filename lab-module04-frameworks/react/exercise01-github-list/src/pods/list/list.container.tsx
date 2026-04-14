import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ListComponent } from "./list.component";
import { MemberEntity } from "./list.vm";
import { getMemberCollection } from "./list.repository";
import { routes } from "core";

const defaultOrg = "lemoncode";

export const ListContainer: React.FC = () => {
	const { org } = useParams<{ org: string }>();
	const navigate = useNavigate();
	const [members, setMembers] = React.useState<MemberEntity[]>([]);
	const [searchValue, setSearchValue] = React.useState(org ?? defaultOrg);
	const [error, setError] = React.useState<string | undefined>();

	React.useEffect(() => {
		const currentOrg = org?.trim() || defaultOrg;
		setSearchValue(currentOrg);
		setError(undefined);
		getMemberCollection(currentOrg)
			.then((memberCollection) => setMembers(memberCollection))
			.catch(() => {
				setMembers([]);
				setError(`No se pudo cargar la organización "${currentOrg}"`);
			});
	}, [org]);

	const handleSearch = (value: string) => {
		const trimmed = value.trim();
		if (!trimmed) {
			return;
		}
		navigate(routes.list(trimmed));
	};

	return (
		<ListComponent
			members={members}
			searchValue={searchValue}
			onSearch={handleSearch}
			error={error}
		/>
	);
};
