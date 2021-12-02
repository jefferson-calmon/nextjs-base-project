import { useRouter } from 'next/router';
import { ButtonHTMLAttributes, useEffect } from 'react';
import { UrlObject } from 'url';

import Link from '../Link';
import Loading from '../Loading';

import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	secondary?: boolean;
	goTo?: string;
	linkTo?: string | UrlObject;
	loading?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({
	children,
	secondary,
	goTo,
	linkTo,
	loading,
	onClick,
	...rest
}: ButtonProps): JSX.Element {
	const { prefetch, ...router } = useRouter();

	useEffect(() => {
		goTo && prefetch(goTo);
	}, [goTo, prefetch]);

	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		onClick && onClick(e);

		goTo && router.push(goTo);
	}

	return (
		<ButtonContainer
			className={`
	                button
	                ${secondary && 'secondary'}
	            `}
			{...rest}
			onClick={handleClick}
		>
			<span>{loading ? <Loading /> : children}</span>

			{linkTo && (
				<Link to={linkTo} className="linkTo">
					{' '}
				</Link>
			)}
		</ButtonContainer>
	);
}

export default Button;
