import { useState, useEffect } from "react";
import "./Timer.css"

const padTime = (time: number) => {
	return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = (time: number) => {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	return `${minutes}:${padTime(seconds)}`;
};

export const Timer = () => {
	const [counter, setCounter] = useState(60);
	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (counter > 0) {
			timer = setTimeout(() => setCounter((counter: number) => counter - 1), 1000);
		}
		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	}, [counter]);

	return (
		<div className="timer-wrapper">
			{counter === 0 ?
				<span className="request-pass-again" onClick={() => setCounter(60)}>Повторно отправить пароль</span>
				:
				<span>{format(counter)}</span>}
		</div>
	);
};