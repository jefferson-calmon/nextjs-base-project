import styled from 'styled-components';

export const ButtonContainer = styled.button`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	min-width: 20rem;
	height: 5rem;
	padding: 0 3rem;

	font-size: 1.6rem;
	font-weight: 500;

	border-radius: 2rem;
	background: #000;
	color: #fff;

	background: var(--color-secondary);

	transition: all 0.5s;

	span {
		position: relative;
		z-index: 15;

		pointer-events: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.linkTo {
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		opacity: 0;
	}

	&::before,
	&::after {
		content: '';

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 5;

		width: 100%;
		height: 100%;

		background: linear-gradient(90deg, var(--nooio-gradient-animation));
		background-size: 1000%;
		border-radius: 5rem;

		filter: brightness(1.5);

		opacity: 0;
		transition: 0.3s;
		pointer-events: none;
	}

	&.secondary {
		background: #efefef;
		color: #000;
		font-weight: 600;
	}

	&:disabled {
		cursor: not-allowed;
		pointer-events: visible;
		opacity: 0.5;
	}

	&:hover {
		&::before {
			opacity: 1;
			filter: brightness(1) blur(7px);
			animation: hoverAnimate 60s linear infinite;
		}

		&::after {
			opacity: 1;
			filter: brightness(1);
			animation: hoverAnimate 60s linear infinite;
		}

		&.secondary {
			&::before {
				opacity: 0;
			}

			&::after {
				opacity: 0;
			}
		}
	}

	@keyframes ripplesAnimate {
		0% {
			width: 0px;
			height: 0px;
			opacity: 0.5;
		}
		100% {
			width: 300px;
			height: 300px;
			opacity: 0;
		}
	}

	@keyframes hoverAnimate {
		0% {
			background-position: 0%;
		}

		100% {
			background-position: 1000%;
		}
	}

	@media (max-width: 540px) {
		height: 7rem;

		font-size: 2rem;
	}
`;
