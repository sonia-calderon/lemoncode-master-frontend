import React from "react";
import { ProfileContext } from "@/core/profile";
import githubSvg from "../assets/github.svg";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { userName } = React.useContext(ProfileContext);
	return (
		<div className="layout__container">
			<header className="layout__header">
				<div className="layout__header-title">
					<img src={githubSvg} width={24} height={24} alt="GitHub" />
					<h1>Github Finder</h1>
				</div>
				<div className="layout__header-company">
					<p>Company {userName}</p>
				</div>
			</header>
			<main className="layout__main">{children}</main>
			<footer className="layout__footer">
				&#10047; Coded by{" "}
				<a href="https://github.com/sonia-calderon" target="_blank">
					Sonia Calderón
				</a>
			</footer>
		</div>
	);
};
