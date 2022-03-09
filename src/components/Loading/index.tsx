import { useTheme } from 'hooks/useTheme';
import styled from 'styled-components';

interface LoadingProps {
	duration?: number;
	icon?: string;
    iconType?: 'fal' | 'far' | 'fas' | 'fab' | 'fad';
	color?: string;
	size?: number;
	className?: string;
}

function Loading({
	duration = .8,
	icon = 'spinner-third',
  iconType = 'fas',
	color,
	size = 2.5,
	className,
}: LoadingProps): JSX.Element {
    const theme = useTheme()

	return (
		<LoadingContainer
			className={`loading ${iconType} fa-${icon} ${className}`}
			style={{
				animationDuration: `${duration}s`,
				color: color || theme.colors.title,
				fontSize: `${size}rem`,
			}}
		/>
	);
}

const LoadingContainer = styled.i`
	animation: button-icon-loading 0s linear infinite;

	@keyframes button-icon-loading {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

export default Loading;
