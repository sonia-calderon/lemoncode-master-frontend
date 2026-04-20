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

	// Recuperar el estado guardado
	const [initialPage, setInitialPage] = React.useState(1);
	const [initialMemberId, setInitialMemberId] = React.useState<
		number | undefined
	>();

	// Guardar la última organización para detectar si cambió
	const previousOrgRef = React.useRef<string | undefined>(undefined);

	React.useEffect(() => {
		const savedPage = sessionStorage.getItem("listPage");
		const savedMemberId = sessionStorage.getItem("listMemberId");

		if (savedPage) {
			setInitialPage(parseInt(savedPage, 10));
			sessionStorage.removeItem("listPage");
		}

		if (savedMemberId) {
			setInitialMemberId(parseInt(savedMemberId, 10));
			sessionStorage.removeItem("listMemberId");
		}
	}, []);

	React.useEffect(() => {
		const currentOrg = org?.trim() || defaultOrg;

		// Solo resetear la página inicial si cambió la organización
		if (previousOrgRef.current && previousOrgRef.current !== currentOrg) {
			setInitialPage(1);
			setInitialMemberId(undefined);
		}
		previousOrgRef.current = currentOrg;

		setSearchValue(currentOrg);
		setError(undefined);
		setMembers([]);

		const fetchMembers = async () => {
			try {
				const memberCollection = await getMemberCollection(currentOrg);
				setMembers(memberCollection);
			} catch (err) {
				setMembers([]);
				setError(`No existe la organización "${currentOrg}"`);
			}
		};

		fetchMembers();
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
			initialPage={initialPage}
			initialMemberId={initialMemberId}
		/>
	);
};
