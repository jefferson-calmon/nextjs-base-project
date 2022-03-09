import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';

interface RedirectProps {
	to: string;
}

function Redirect({ to }: RedirectProps): JSX.Element {
	const { push } = useRouter();

	useLayoutEffect(() => {
		push(to);
	}, [push, to]);

	return <></>;
}

export default Redirect;
