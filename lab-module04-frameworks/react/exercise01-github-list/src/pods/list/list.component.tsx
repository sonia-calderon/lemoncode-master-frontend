import React from "react";
import { Link } from "react-router-dom";
import { routes } from "core";
import { MemberEntity } from "./list.vm";
import searchIcon from "../../assets/search.svg";

interface Props {
	members: MemberEntity[];
}

export const ListComponent: React.FC<Props> = (props) => {
	const { members } = props;

	return (
		<>
			<div className="search">
				<input
					type="search"
					name="search"
					id="search"
					placeholder="Search for a company"
				/>
				<button type="submit">
					<img src={searchIcon} width={24} height={24} alt="Search Icon" />
				</button>
			</div>
			<div className="title">
				<h3>Lemoncode</h3>
			</div>
			<div className="list">
				<div className="list__header">
					<span className="list__header-content">Avatar</span>
					<span className="list__header-content">Id</span>
					<span className="list__header-content">Name</span>
				</div>
				<ul className="list__items">
					{members.map((member) => (
						<li key={member.id} className="list__item">
							<img src={member.avatar_url} />
							<p>{member.id}</p>
							<Link to={routes.details(member.login)}>{member.login}</Link>
						</li>
					))}
				</ul>
				<div className="list__pagination">1 2 3</div>
			</div>
		</>
	);
};
