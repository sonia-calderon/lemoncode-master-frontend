import React from "react";
import { MemberEntity } from "./list.vm";
import { List, Stack, Fade } from "@mui/material";
import { ListHeaderComponent } from "./components/ListHeader.component";
import { ErrorComponent } from "./components/Error.component";
import { MemberCardComponent } from "./components/MemberCard.component";
import { PaginationComponent } from "./components/Pagination.component";
import { SearchBarComponent } from "./components/SearchBar.component";
import { SearchResultsComponent } from "./components/SearchResults.component";

interface Props {
	members: MemberEntity[];
	searchValue: string;
	onSearch: (value: string) => void;
	error?: string;
	initialPage?: number;
	initialMemberId?: number;
}

export const ListComponent: React.FC<Props> = (props) => {
	const {
		members,
		searchValue,
		onSearch,
		error,
		initialPage = 1,
		initialMemberId,
	} = props;

	const [inputValue, setInputValue] = React.useState("");
	const [currentPage, setCurrentPage] = React.useState(initialPage);

	// Refs para manejar el scroll
	const memberRefs = React.useRef<Map<number, HTMLLIElement>>(new Map());
	const ignoreNextScrollRef = React.useRef(false);
	const isInitialMount = React.useRef(true);
	const hasRestoredScroll = React.useRef(false);
	const previousInitialPageRef = React.useRef(initialPage);

	// Configuración de paginación
	const itemsPerPage = 20;
	const totalPages = Math.ceil(members.length / itemsPerPage);

	// Members paginados
	const paginatedMembers = members.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	);

	// Efecto: Actualizar página cuando cambia initialPage (volver del detalle)
	React.useEffect(() => {
		if (initialPage !== previousInitialPageRef.current) {
			ignoreNextScrollRef.current = true;
			setCurrentPage(initialPage);
			hasRestoredScroll.current = false;
			previousInitialPageRef.current = initialPage;
		}
	}, [initialPage]);

	// Efecto: Restaurar scroll al volver del detalle
	React.useEffect(() => {
		if (!initialMemberId || members.length === 0 || hasRestoredScroll.current) {
			return;
		}

		const timeout = window.setTimeout(() => {
			const memberElement = memberRefs.current.get(initialMemberId);
			if (memberElement) {
				memberElement.scrollIntoView({
					behavior: "smooth",
					block: "center",
				});
				hasRestoredScroll.current = true;
			}
		}, 100);

		return () => window.clearTimeout(timeout);
	}, [initialMemberId, members.length, currentPage]);

	// Efecto: Scroll al inicio al cambiar de página (excepto en la carga inicial o durante restauración)
	React.useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
			return;
		}

		if (ignoreNextScrollRef.current) {
			ignoreNextScrollRef.current = false;
			return;
		}

		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [currentPage]);

	// Handlers
	const onSubmit = () => {
		onSearch(inputValue.trim());
		setInputValue("");
		setCurrentPage(1);
	};

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
	};

	const handleMemberClick = (memberId: number) => {
		// Guardar el estado actual en sessionStorage
		sessionStorage.setItem("listPage", currentPage.toString());
		sessionStorage.setItem("listMemberId", memberId.toString());
	};

	return (
		<Stack
			spacing={{ xs: 2, md: 4 }}
			sx={{
				width: "100%",
				maxWidth: 1080,
				mx: "auto",
				px: { xs: 1.5, sm: 2, md: 3 },
			}}
		>
			<SearchBarComponent
				value={inputValue}
				onChange={setInputValue}
				onSubmit={onSubmit}
			/>
			{searchValue && <SearchResultsComponent searchValue={searchValue} />}

			{error && <ErrorComponent error={error} />}

			{!error && (
				<Fade in={true} timeout={600}>
					<Stack spacing={2} sx={{ width: "100%" }}>
						<ListHeaderComponent />

						<List sx={{ padding: 0 }}>
							{paginatedMembers.map((member) => (
								<MemberCardComponent
									member={member}
									onMemberClick={handleMemberClick}
									cardRef={(el) => {
										if (el) {
											memberRefs.current.set(member.id, el);
										}
									}}
									searchValue={searchValue}
								/>
							))}
						</List>
						<PaginationComponent
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={handlePageChange}
						/>
					</Stack>
				</Fade>
			)}
		</Stack>
	);
};
