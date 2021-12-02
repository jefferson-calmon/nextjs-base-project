import styled from 'styled-components';

export const LoginContainer = styled.div`
	header {
		display: flex;
		align-items: center;

		height: 20.6rem;

		background: #fff098;

		.content {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}

	main {
		flex: 1;
		height: calc(100vh - 31.4rem);

		background: #6bc9eb;

		.content {
			position: relative;
			height: 100%;

			.overlay {
				position: absolute;
				top: 0;
				left: 50%;

				transform: translateX(-50%);

				display: flex;
				align-items: center;
				justify-content: center;

				width: 120%;
				height: 100%;
				.image {
					width: 100%;

					img,
					div {
						width: 100%;
					}
				}
			}

			form {
				position: relative;
				z-index: 5;
				transform: translateY(-10rem);

				width: 50rem;
				min-height: 50rem;
				margin: 0 auto;

				background: #fff;
				border-radius: 2.5rem;

				&::before {
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					z-index: 0;

					width: 100%;
					height: 43rem;

					background: transparent;
					border-radius: 2.5rem;
					box-shadow: 0 0 30px #1490bc;
				}

				> div {
					position: relative;
					z-index: 5;

					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: center;

					padding: 4.4rem 10rem;

					background: #fff;
					border-radius: 2.5rem;
				}

				h1 {
					margin-bottom: 4rem;

					font-size: 2.8rem;
					line-height: 1.3;

					strong {
						font-weight: bold;
						font-family: 'Poppins', sans-serif;
					}

					span {
						font-weight: 500;
						font-family: 'Poppins', sans-serif;
					}
				}

				.forgot-password {
					display: flex;
					justify-content: flex-start;
					text-align: left;

					width: 100%;

					margin-top: 0.8rem;
					font-size: 1.6rem;
					font-weight: 500;
					color: var(--color-secondary);
				}

				.button {
					width: 100%;
					border-radius: 0;

					margin-top: 4.8rem;
				}
			}
		}
	}

	footer {
		display: flex;
		align-items: center;

		height: 10.8rem;

		background: #fff;

		.content {
			display: flex;
			align-items: center;
			justify-content: center;

			span {
				font-size: 1.6rem;
				font-weight: bold;
				color: var(--color-secondary);
			}
		}
	}
`;

export default LoginContainer;
