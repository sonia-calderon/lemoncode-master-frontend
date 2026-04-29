import React from "react";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<>
			<header>HEADER</header>
			<main>{children}</main>
			<footer>FOOTER</footer>
		</>
	);
};
