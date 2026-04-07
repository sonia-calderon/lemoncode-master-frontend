import React from "react";

export const CenterLayout: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	return <div className="layout-center">{children}</div>;
};
