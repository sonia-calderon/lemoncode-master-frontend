import React from "react";
import { Link } from "react-router-dom";
import { routes } from "core";
import { MemberDetailEntity } from "./detail.vm";
import leftArrow from "../../assets/arrow-left.svg";

interface Props {
	member: MemberDetailEntity;
	org: string;
}

export const DetailComponent: React.FC<Props> = (props) => {
	const { member, org } = props;

	return (
		<>
			<div className="detail">
				<div className="detail__img">
					<img src={member.avatar_url} alt="" />
				</div>
				<div className="detail__content">
					<p>Name: {member.name}</p>
					<p>Id: {member.id}</p>
					<p>User: {member.login}</p>
					<p>Company: {member.company}</p>
					<p>Bio: {member.bio}</p>
				</div>
			</div>
			<div className="detail__navigation">
				<Link to={routes.list(org)}>
					<span>
						<img src={leftArrow} alt="" />
					</span>
					<span>Back to list page</span>
				</Link>
			</div>
		</>
	);
};
