import React from "react";
import { Link } from "react-router-dom";
import { routes } from "core";
import { MemberEntity } from "./list.vm";
import searchIcon from "../../assets/search.svg";

interface Props {
	members: MemberEntity[];
	searchValue: string;
	onSearch: (value: string) => void;
	error?: string;
}

export const ListComponent: React.FC<Props> = (props) => {
	const { members, searchValue, onSearch, error } = props;

	const [inputValue, setInputValue] = React.useState("");

	const itemsPerPage = 4;
	const [currentPage, setCurrentPage] = React.useState(1);
	const totalPages = Math.ceil(members.length / itemsPerPage);
	const paginatedMembers = members.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputValue.trim()) {
			onSearch(inputValue.trim());
			setInputValue("");
		}
	};

	return (
		<>
			<form className="search" onSubmit={handleSubmit}>
				<input
					type="search"
					name="search"
					id="search"
					placeholder="Search for a company"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button type="submit">
					<img src={searchIcon} width={24} height={24} alt="Search Icon" />
				</button>
			</form>
			<div className="title">
				<h3>{searchValue}</h3>
			</div>
			{error ? <div className="list__error">{error}</div> : null}
			<div className="list">
				<div className="list__header">
					<span className="list__header-content">Avatar</span>
					<span className="list__header-content">Id</span>
					<span className="list__header-content">Name</span>
				</div>
				<ul className="list__items">
					{paginatedMembers.map((member) => (
						<li key={member.id} className="list__item">
							<img src={member.avatar_url} />
							<p>{member.id}</p>
							<Link to={routes.details(searchValue, member.login)}>{member.login}</Link>
						</li>
					))}
				</ul>
				<div className="list__pagination">
					<button
						onClick={() => setCurrentPage((prev) => prev - 1)}
						disabled={currentPage === 1}
						className="list__pagination-btn list__pagination-btn--nav"
					>
						Previous
					</button>

					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
						<button
							key={page}
							onClick={() => setCurrentPage(page)}
							className={`list__pagination-btn ${currentPage === page ? "list__pagination-btn--active" : ""}`}
						>
							{page}
						</button>
					))}

					<button
						onClick={() => setCurrentPage((prev) => prev + 1)}
						disabled={currentPage === totalPages || totalPages === 0}
						className="list__pagination-btn list__pagination-btn--nav"
					>
						Next
					</button>
				</div>
			</div>
		</>
	);
};
