import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { DetailContainer } from "@/pods/detail";

export const DetailPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	return <AppLayout>{id && <DetailContainer login={id} />}</AppLayout>;
};
