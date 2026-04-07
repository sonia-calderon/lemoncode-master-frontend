import React from "react";
import { UserProfile, createEmptyUserProfile } from "./profile.vm";

interface Context extends UserProfile {
	setUserProfile: (userProfile: UserProfile) => void;
}

const noUserLogin = "no user login";

export const ProfileContext = React.createContext<Context>({
	userName: noUserLogin,
	setUserProfile: () =>
		console.warn(
			"If you are reading this, likely you have forgotten to add the prov",
		),
});

export const ProfileProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [userProfile, setUserProfile] = React.useState<UserProfile>(
		createEmptyUserProfile(),
	);

	return (
		<ProfileContext.Provider
			value={{
				userName: userProfile.userName,
				setUserProfile,
			}}
		>
			{children}
		</ProfileContext.Provider>
	);
};
