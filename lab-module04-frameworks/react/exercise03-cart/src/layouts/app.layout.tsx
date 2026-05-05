import React from "react";
import { Header } from "./components/header.component";
import { Footer } from "./components/footer.component";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<div className="app-layout">
			<Header />
			<main className="main container">{children}</main>
			<Footer />
		</div>
	);
};
