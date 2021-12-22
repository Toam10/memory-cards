import React, { memo, useState } from "react";
import * as Style from "./timer.styles";
const Timer = () => {
	const [seconds, setSeconds] = useState(0);
	const [mins, setMins] = useState(0);
	const Timer = () => {
		if (seconds > 60) {
			setSeconds(0);
			setMins(mins + 1);
		}
		if (mins > 60) {
			setMins(0);
		}
		setSeconds(seconds + 1);
	};
	setTimeout(Timer, 1000);
	return (
		<Style.Container>
			<Style.Wrapper>{`${mins}:${seconds}`}</Style.Wrapper>
		</Style.Container>
	);
};

export default memo(Timer);
