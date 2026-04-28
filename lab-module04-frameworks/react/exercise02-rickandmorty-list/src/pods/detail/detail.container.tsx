import React from "react";
import { useNavigate } from "react-router-dom";
import { CharacterDetailEntity } from "./detail.vm";
import { DetailComponent } from "./detail.component";
import { getCharacterDetail } from "./detail.repository";

interface Props {
	id: number;
}

export const DetailContainer: React.FC<Props> = (props) => {
	const { id } = props;
	const navigate = useNavigate();
	const [character, setCharacter] = React.useState<CharacterDetailEntity>();
	const [isLoading, setIsLoading] = React.useState(true);
	const [error, setError] = React.useState<string | null>(null);

	React.useEffect(() => {
		getCharacterDetail(id)
			.then((characterDetail) => {
				setCharacter(characterDetail);
				setIsLoading(false);
			})
			.catch((err) => {
				setError("Error loading character");
				setIsLoading(false);
			});
	}, [id]);

	const handleGoBack = () => {
		navigate(-1);
	};

	return <DetailComponent character={character} onGoBack={handleGoBack} />;
};
