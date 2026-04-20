import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { DetailContainer } from "@/pods/detail";

export const DetailPage: React.FC = () => {
	const { org, id } = useParams<{ org: string; id: string }>();
	return (
		<AppLayout>
			{org && id && <DetailContainer org={org} login={id} />}
		</AppLayout>
	);
};
