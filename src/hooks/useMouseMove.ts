import { useState } from 'react';

interface UseMove {
	x: number;
	y: number;
	handleMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
}

export const useMove = (): UseMove => {
	const [state, setState] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
		e.persist();
		setState((state) => ({ ...state, x: e.clientX, y: e.clientY }));
	};
	return {
		x: state.x,
		y: state.y,
		handleMouseMove,
	};
};
