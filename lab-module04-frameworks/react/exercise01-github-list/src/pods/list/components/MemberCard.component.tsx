import React from "react";
import { Link } from "react-router-dom";
import { routes } from "core";
import { styled } from "@mui/material/styles";
import { Typography, Avatar, ListItem } from "@mui/material";
import { MemberEntity } from "../list.vm";

const StyledListItem = styled(ListItem)(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	alignItems: "center",
	borderBottom: `1px solid ${theme.palette.divider}`,
	padding: theme.spacing(2, 3),
	gap: theme.spacing(2),
	width: "100%",
	transition: "transform 0.3s ease, box-shadow 0.3s ease",
	"&:hover": {
		transform: "scale(1.02)",
	},
	"&:last-child": {
		borderBottom: "none",
	},
	[theme.breakpoints.down("sm")]: {
		flexDirection: "column",
		padding: theme.spacing(2),
		gap: theme.spacing(1.5),
	},
}));

const StyledLink = styled(Link)(({ theme }) => ({
	color: theme.palette.common.white,
	textDecoration: "underline",
	word: "break-word",
	"&:hover": {
		color: theme.palette.primary.main,
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.95rem",
	},
}));

interface Props {
	member: MemberEntity;
	onMemberClick: (id: number) => void;
	cardRef?: (el: HTMLLIElement | null) => void;
	searchValue: string;
}

export const MemberCardComponent: React.FC<Props> = (props) => {
	const { member, onMemberClick, cardRef, searchValue } = props;

	return (
		<StyledListItem key={member.id} ref={cardRef}>
			<Avatar src={member.avatar_url} sx={{ width: 80, height: 80 }} />
			<Typography>{member.id}</Typography>
			<StyledLink
				to={routes.details(searchValue, member.login)}
				onClick={() => onMemberClick(member.id)}
			>
				{member.login}
			</StyledLink>
		</StyledListItem>
	);
};
