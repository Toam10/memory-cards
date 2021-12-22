import React, { memo, useEffect, useState } from "react";

import * as Style from "./timer.styles";
const Timer = () => {
	const [seconds, setSeconds] = useState(0);
	const [mins, setMins] = useState(0);

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
		return () => clearInterval(myTimer);
	});

	return (
		<Style.Container>
			<Style.Wrapper>{`${mins}:${seconds}`}</Style.Wrapper>
		</Style.Container>
	);
};

export default memo(Timer);
