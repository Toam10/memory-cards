import React, { memo, useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/auth/user.context";
import { updateUserRecord } from "../../firebase/firebase.utils";

import * as Style from "./timer.styles";
const Timer = ({ isNeedToUpdateRecord, setIsNeedToUpdateRecord }: any) => {
	const [seconds, setSeconds] = useState(0);
	const [mins, setMins] = useState(0);
	const currentUser = useContext(UserContext);

	useEffect(() => {
		const myTimer = setInterval(() => {
			if (seconds >= 60) {
				setTimeout(() => {
					setSeconds(0);
					setMins(mins + 1);
				}, 0);
			}

			if (mins >= 60) {
				setTimeout(() => {
					setMins(0);
				}, 0);
			}
			setSeconds(seconds + 1);
		}, 1000);

		if (isNeedToUpdateRecord) {
			const record = `${mins}.${seconds}`;
			const updateDoc = async () => {
				await updateUserRecord(currentUser, parseFloat(record));
			};
			updateDoc();
			setIsNeedToUpdateRecord(false);
		}

		return () => clearInterval(myTimer);
	});

	return (
		<Style.Container>
			<Style.Wrapper>{`${mins}:${seconds}`}</Style.Wrapper>
		</Style.Container>
	);
};

export default memo(Timer);
